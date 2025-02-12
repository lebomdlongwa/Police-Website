import React, { useEffect, useState } from "react";
import * as styled from "./styles/chatApp";
import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";
import { socket } from "../../socket";

export const ChatAppComponent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showPersonDetails, setShowPersonDetails] = useState(true);

  const handleShowPersonDetails = () => setShowPersonDetails(false);

  const channel = socket.channel("chats:lobby");

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    channel.on("new_message", (payload) => {
      console.log("New message received:", payload);
      setMessages((prev) => [...prev, payload.message.data]);
    });
  }, [channel]);

  return (
    <styled.ChatAppWrapper>
      <ChatSideBar messages={messages} />
      <ChatBody messages={messages} channel={channel} />
      {showPersonDetails && (
        <ChatEndBar ShowPersonDetails={handleShowPersonDetails} />
      )}
    </styled.ChatAppWrapper>
  );
};
