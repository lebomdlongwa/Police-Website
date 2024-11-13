import React from "react";
import * as styled from "./styles/chatApp";
import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";

export const ChatAppComponent = () => {
  return (
    <styled.ChatAppWrapper>
      <ChatSideBar />
      <ChatBody />
      <ChatEndBar />
    </styled.ChatAppWrapper>
  );
};
