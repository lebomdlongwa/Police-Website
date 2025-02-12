import React, { useEffect, useRef, useState } from "react";
import * as styled from "./styles/chatBody";
import { ChatMessageComponent } from "./chatMessage";
import { ThreeDotsIcon } from "../../../components/icons/threeDots";
import { Color } from "../../../components/colorCodes";
import { ClipIcon } from "../../../components/icons/clip";
import { FlyingEnvelopeIcon } from "../../../components/icons/flyingEnvelope";
import { Channel } from "phoenix";

type ChatBodyProps = {
  messages: Message[];
  channel: Channel;
};

export const ChatBody = (props: ChatBodyProps) => {
  const { messages, channel } = props;

  const [input, setInput] = useState("");
  const chatsRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (chatsRef.current) {
      chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
    }
  });

  const handleSendMessage = () => {
    channel.join();
    channel.push("send_message", { message: input });
    setInput("");
  };

  return (
    <styled.ChatBodyWrapper>
      <styled.Header>
        Lebohang Mdlongwa
        <styled.HeaderOptions>
          <ThreeDotsIcon size={17} color={Color.lightBlack} />
        </styled.HeaderOptions>
      </styled.Header>

      <styled.MessagesBody>
        <styled.Chats ref={chatsRef}>
          <ChatMessageComponent messages={messages} />
        </styled.Chats>
        <styled.MessageBoxContainer>
          <styled.MessageBoxWrapper>
            <styled.MessageBox
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <styled.ButtonWrapper>
              <ClipIcon size={15} color={Color.gray} />
              <styled.SendButton onClick={handleSendMessage}>
                <FlyingEnvelopeIcon size={15} />
              </styled.SendButton>
            </styled.ButtonWrapper>
          </styled.MessageBoxWrapper>
        </styled.MessageBoxContainer>
      </styled.MessagesBody>
    </styled.ChatBodyWrapper>
  );
};
