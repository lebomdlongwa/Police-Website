import React, { useEffect, useRef, useState } from "react";

import { isEmpty } from "lodash";
import { Channel } from "phoenix";

import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";
import { fetchUserThreads, setSeenTrue } from "./actions";
import * as styled from "./styles/chatApp";

import { socket } from "../../socket";
import { useUser } from "../userContext";
import { Spinner } from "../../components/Spinner";

export const ChatAppComponent = () => {
  const [showPersonDetails, setShowPersonDetails] = useState(true);
  const [activeRecipientId, setActiveRecipientId] = useState(null);
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [noData, setNoData] = useState(false);
  const [threadsObject, setThreadsObject] = useState<ThreadsObject>({
    recipients: [],
    threads: [],
  });
  const threadChannelsRef = useRef<Record<string, Channel>>({});
  const userChannelRef = useRef(null);
  const currentConvoIdRef = useRef(null);
  const { user } = useUser();

  const handleShowPersonDetails = () => setShowPersonDetails(false);
  const handleSetActiveRecipientId = (id: string) => setActiveRecipientId(id);
  const handleSetCurrentThreadId = (id: string) => setCurrentThreadId(id);
  const handleUpdateThreadsObject = (obj: ThreadsObject) =>
    setThreadsObject(obj);

  const isLoading = isEmpty(threadsObject.threads) && !noData;
  const isMessagesValid = true;
  const currentChannel = threadChannelsRef.current[currentThreadId];

  const fetchAndSetUserThreads = () =>
    fetchUserThreads(user?.id)
      .then((res: ThreadsObject) => {
        setThreadsObject(res);

        if (isEmpty(res.threads)) {
          setNoData(true);
        }

        res.threads.forEach((thread) => {
          const channel = socket.channel(`chats:threadId-${thread.id}`);

          channel
            .join()
            .receive("ok", () => {
              // console.log(`Joined chats:threadId-${thread.id} successfully`);
            })
            .receive("error", (err) => console.log("Unable to join", err));

          threadChannelsRef.current[thread.id] = channel;

          channel.on("new_message", (payload) => {
            console.log("New message received: ", payload.message);

            const messageObj = payload.message;

            const isMessageFromCurrentThread =
              messageObj.thread_id === currentConvoIdRef.current;
            const isUserMessageAuthor = messageObj.author_id === user?.id;

            if (isMessageFromCurrentThread && !isUserMessageAuthor) {
              setSeenTrue(messageObj.thread_id);

              userChannelRef.current.push("message_status_changed", {
                thread_id: thread.id,
                recipient_id: messageObj.author_id,
              });
            }

            const updatedMessageObj =
              isMessageFromCurrentThread && !isUserMessageAuthor
                ? { ...messageObj, seen: true }
                : messageObj;

            setThreadsObject((prev) => {
              const updatedThreads = prev.threads.map((thread) => {
                if (thread.id !== messageObj.thread_id) return thread;

                return {
                  ...thread,
                  messages: [...thread.messages, updatedMessageObj],
                };
              });

              return {
                ...prev,
                threads: updatedThreads,
              };
            });
          });
        });
      })
      .catch((err) => err);

  useEffect(() => {
    if (user?.id) {
      fetchAndSetUserThreads();

      const userChannel = socket.channel(`user:${user.id}`);
      console.log(`user:${user.id}`);

      userChannel
        .join()
        .receive("ok", () => console.log(`Joined user:${user.id} successfully`))
        .receive("error", (err) => console.log("Unable to join", err));

      userChannelRef.current = userChannel;

      userChannel.on("new_thread", (payload) => {
        console.log("New thread received: ", payload.thread.data);
        fetchAndSetUserThreads();
      });

      userChannel.on("message_seen", (payload) => {
        console.log("Message seen: ", payload);

        setThreadsObject((prev) => {
          return {
            ...prev,
            threads: prev.threads.map((thd: Thread) => {
              if (thd.id !== payload.thread_id) return thd;

              return {
                ...thd,
                messages: thd.messages.map((msg) =>
                  msg.seen ? msg : { ...msg, seen: true }
                ),
              };
            }),
          };
        });
      });
    }

    return () => {
      Object.values(threadChannelsRef.current).forEach((channel: Channel) =>
        channel.leave()
      );
    };
  }, [user]);

  return (
    <styled.ChatAppWrapper>
      {isLoading ? (
        <Spinner size={30} />
      ) : (
        <>
          <ChatSideBar
            threadsObject={threadsObject}
            onSetActiveRecipientId={handleSetActiveRecipientId}
            user={user}
            activeRecipientId={activeRecipientId}
            onSetCurrentThreadId={handleSetCurrentThreadId}
            currentConvoIdRef={currentConvoIdRef}
            onUpdateThreadsObj={handleUpdateThreadsObject}
            onFetchAndSetUserThreads={fetchAndSetUserThreads}
            noData={noData}
            userChannel={userChannelRef.current}
          />
          <ChatBody
            currentChannel={currentChannel}
            isMessagesValid={isMessagesValid}
            threadsObject={threadsObject}
            activeRecipientId={activeRecipientId}
            currentThreadId={currentThreadId}
            user={user}
          />
          {isMessagesValid && showPersonDetails && (
            <ChatEndBar ShowPersonDetails={handleShowPersonDetails} />
          )}
        </>
      )}
    </styled.ChatAppWrapper>
  );
};
