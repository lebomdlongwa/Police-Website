import React from "react";
import * as styled from "./styles/chatMessage";

export const ChatMessageComponent = () => {
  return (
    <styled.ChatMessageWrapper>
      <styled.ChatAvatar initials="L" avatarSize={28} fontSize={13} />
      <styled.ChatMessage>
        I'm coming later so cook sadza and sausage mina lingangifakeli am not
        eating it will it cabbage
      </styled.ChatMessage>
    </styled.ChatMessageWrapper>
  );
};
