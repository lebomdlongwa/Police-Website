import React, { useEffect, useRef, useState } from "react";

import { isEmpty } from "lodash";
import { Channel } from "phoenix";

import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";
import { fetchUserThreads } from "./actions";
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
  const { user } = useUser();

  const handleShowPersonDetails = () => setShowPersonDetails(false);
  const handleSetActiveRecipientId = (id: string) => setActiveRecipientId(id);
  const handleSetCurrentThreadId = (id: string) => setCurrentThreadId(id);

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
          const messageObject = payload.message.data;
          console.log(
            "New message received",
            messageObject,
            threadsObject.threads,
            res
          );

          const updatedThreads = res.threads.map((thread) => {
            if (thread.id === messageObject.thread_id) {
              return {
                ...thread,
                messages: [...thread.messages, messageObject],
              };
            } else {
              return thread;
            }
          });

          setThreadsObject((prev) => ({
            ...prev,
            threads: updatedThreads,
          }));
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
          />
          <ChatBody
            currentChannel={currentChannel}
            isMessagesValid={isMessagesValid}
            threadsObject={threadsObject}
            activeRecipientId={activeRecipientId}
            userId={user?.id}
            currentThreadId={currentThreadId}
            userName={`${user?.name} ${user?.surname}`}
          />
          {isMessagesValid && showPersonDetails && (
            <ChatEndBar ShowPersonDetails={handleShowPersonDetails} />
          )}
        </>
      )}
    </styled.ChatAppWrapper>
  );
};
