import React, { useState } from "react";
import * as styled from "./styles/chatApp";
import { ChatSideBar } from "./ChatSideBar";
import { ChatBody } from "./ChatBody/chatBody";
import { ChatEndBar } from "./ChatEndBar/endBar";

export const ChatAppComponent = () => {
  const [showPersonDetails, setShowPersonDetails] = useState(true);

  const handleShowPersonDetails = () => setShowPersonDetails(false);

  return (
    <styled.ChatAppWrapper>
      <ChatSideBar />
      <ChatBody />
      {showPersonDetails && (
        <ChatEndBar ShowPersonDetails={handleShowPersonDetails} />
      )}
    </styled.ChatAppWrapper>
  );
};
