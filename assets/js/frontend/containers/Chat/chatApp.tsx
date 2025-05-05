import React, { useEffect, useState } from "react";

import { isEmpty } from "lodash";

import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";
import { fetchUserThreads } from "./actions";
import * as styled from "./styles/chatApp";

import { socket } from "../../socket";
import { useUser } from "../userContext";
import { Spinner } from "../../components/Spinner";
import { fetchData } from "../requests";

export const ChatAppComponent = () => {
  const [showPersonDetails, setShowPersonDetails] = useState(true);
  const [activeRecipientId, setActiveRecipientId] = useState(null);
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [threadsObject, setThreadsObject] = useState<ThreadsObject>({
    recipients: [],
    threads: [],
  });
  const { user } = useUser();

  const handleShowPersonDetails = () => setShowPersonDetails(false);
  const handleSetActiveRecipientId = (id: string) => setActiveRecipientId(id);
  const handleSetCurrentThreadId = (id: string) => setCurrentThreadId(id);

  const isLoading = !user?.id;
  const isMessagesValid = true;

  const channel = socket.channel(`chats:threadId-${currentThreadId}`);

  useEffect(() => {
    fetchData(fetchUserThreads, setThreadsObject);
  }, []);

  useEffect(() => {
    if (currentThreadId) {
      channel
        .join()
        .receive("ok", () => {
          console.log(`Joined chats:threadId-${currentThreadId} successfully`);
        })
        .receive("error", (resp) => console.log("Unable to join", resp));

      return () => {
        channel.leave();
      };
    }
  }, [channel]);

  useEffect(() => {
    channel.on("new_message", (payload) => {
      const messageObject = payload.message.data;
      console.log("New message received", messageObject);
      // if (currentThreadId === messageObject.thread_id) {
      // }

      const updatedThreads = threadsObject.threads.map((thread) => {
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
  }, [channel]);

  return (
    <styled.ChatAppWrapper>
      {isLoading && isEmpty(threadsObject) ? (
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
            channel={channel}
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
