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
  const [threadsObject, setThreadsObject] = useState<ThreadsObject>({
    recipients: [],
    threads: [],
  });
  const channelsRef = useRef<Record<string, Channel>>({});
  const currentConvoIdRef = useRef(null);
  const { user } = useUser();

  const handleShowPersonDetails = () => setShowPersonDetails(false);
  const handleSetActiveRecipientId = (id: string) => setActiveRecipientId(id);
  const handleSetCurrentThreadId = (id: string) => setCurrentThreadId(id);
  const handleUpdateThreadsObject = (obj: ThreadsObject) =>
    setThreadsObject(obj);

  const isLoading = !user?.id || isEmpty(threadsObject.threads);
  const isMessagesValid = true;
  const currentChannel = channelsRef.current[currentThreadId];

  useEffect(() => {
    fetchUserThreads().then((res: ThreadsObject) => {
      setThreadsObject(res);

      res.threads.forEach((thread) => {
        const channel = socket.channel(`chats:threadId-${thread.id}`);

        channel
          .join()
          .receive("ok", () => {
            console.log(`Joined chats:threadId-${thread.id} successfully`);
          })
          .receive("error", (resp) => console.log("Unable to join", resp));

        channelsRef.current[thread.id] = channel;

        channel.on("new_message", (payload) => {
          const messageObj = payload.message.data;
          const isMessageFromCurrentThread =
            messageObj.thread_id === currentConvoIdRef.current;
          const updatedMessageObj = isMessageFromCurrentThread
            ? { ...messageObj, seen: true }
            : messageObj;

          if (isMessageFromCurrentThread) {
            setSeenTrue(messageObj.thread_id);
          }

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
    });

    return () => {
      Object.values(channelsRef.current).forEach((channel: Channel) =>
        channel.leave()
      );
    };
  }, []);

  return (
    <styled.ChatAppWrapper>
      {isLoading ? (
        <Spinner size={30} />
      ) : (
        <>
          <ChatSideBar
            threadsObject={threadsObject}
            onSetActiveRecipientId={handleSetActiveRecipientId}
            userId={user?.id}
            activeRecipientId={activeRecipientId}
            onSetCurrentThreadId={handleSetCurrentThreadId}
            currentConvoIdRef={currentConvoIdRef}
            onUpdateThreadsObj={handleUpdateThreadsObject}
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
