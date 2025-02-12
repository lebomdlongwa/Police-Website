import React from "react";
import * as styled from "./styles/chatMessage";

type ChatMessageComponentProps = {
  messages: Message[];
};

export const ChatMessageComponent = (props: ChatMessageComponentProps) => {
  const { messages } = props;

  return (
    <>
      {Array.isArray(messages) &&
        messages.map((message) => (
          <styled.ChatMessageWrapper key={message.id}>
            <styled.ChatMessage>{message.content}</styled.ChatMessage>
            <styled.ChatAvatar initials="L" avatarSize={28} fontSize={13} />
          </styled.ChatMessageWrapper>
        ))}
    </>
  );
};
