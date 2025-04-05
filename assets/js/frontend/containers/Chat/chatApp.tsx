import React, { useEffect, useState } from "react";

import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";
import * as styled from "./styles/chatApp";

import { socket } from "../../socket";
import { useUser } from "../userContext";
import { Spinner } from "../../components/Spinner";

export const ChatAppComponent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showPersonDetails, setShowPersonDetails] = useState(true);
  const { user } = useUser();

  const handleShowPersonDetails = () => setShowPersonDetails(false);
  const isLoading = !user?.id;

  const channel = socket.channel(`chats:${user?.id}`);

  useEffect(() => {
    if (!isLoading) {
      channel
        .join()
        .receive("ok", (resp) => {
          console.log("Joined successfully");
          setMessages(resp.messages.data);
        })
        .receive("error", (resp) => console.log("Unable to join", resp));

      return () => {
        channel.leave();
      };
    }
  }, [user]);

  useEffect(() => {
    channel.on("new_message", (payload) => {
      console.log("New message received:", payload);
      setMessages((prev) => [...prev, payload.message.data]);
    });
  }, [channel]);

  return (
    <styled.ChatAppWrapper>
      {isLoading ? (
        <Spinner size={30} />
      ) : (
        <>
          <ChatSideBar messages={messages} />
          <ChatBody messages={messages} channel={channel} />
          {showPersonDetails && (
            <ChatEndBar ShowPersonDetails={handleShowPersonDetails} />
          )}
        </>
      )}
    </styled.ChatAppWrapper>
  );
};
