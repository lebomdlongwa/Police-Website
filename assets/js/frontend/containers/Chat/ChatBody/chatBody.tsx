import React from "react";
import * as styled from "./styles/chatBody";
import { ChatMessageComponent } from "./chatMessage";
import { ThreeDotsIcon } from "../../../components/icons/threeDots";
import { Color } from "../../../components/colorCodes";
import { ClipIcon } from "../../../components/icons/clip";
import { FlyingEnvelopeIcon } from "../../../components/icons/flyingEnvelope";

export const ChatBody = () => {
  return (
    <styled.ChatBodyWrapper>
      <styled.Header>
        Lebohang Mdlongwa
        <styled.HeaderOptions>
          <ThreeDotsIcon size={17} color={Color.lightBlack} />
        </styled.HeaderOptions>
      </styled.Header>
      <styled.MessagesBody>
        <styled.Chats>
          <ChatMessageComponent />
        </styled.Chats>
        <styled.MessageBoxWrapper>
          <styled.MessageBox placeholder="Type a message..." />
          <styled.ButtonWrapper>
            <ClipIcon size={15} color={Color.gray} />
            <FlyingEnvelopeIcon size={15} />
          </styled.ButtonWrapper>
        </styled.MessageBoxWrapper>
      </styled.MessagesBody>
    </styled.ChatBodyWrapper>
  );
};
