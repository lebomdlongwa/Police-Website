import React, { useEffect, useRef, useState } from "react";

import { Channel } from "phoenix";

import { ChatMessageComponent } from "./chatMessage";
import * as styled from "./styles/chatBody";

import { ThreeDotsIcon } from "../../../components/icons/threeDots";
import { Color } from "../../../components/colorCodes";
import { ClipIcon } from "../../../components/icons/clip";
import { FlyingEnvelopeIcon } from "../../../components/icons/flyingEnvelope";
import { ChatIcon } from "../../../components/icons/chat";

type ChatBodyProps = {
  currentChannel: Channel;
  isMessagesValid: boolean;
  threadsObject: ThreadsObject;
  activeRecipientId: string;
  userId: string;
  currentThreadId: string;
  userName: string;
};

export const ChatBody = (props: ChatBodyProps) => {
  const {
    currentChannel,
    isMessagesValid,
    threadsObject,
    activeRecipientId,
    userId,
    currentThreadId,
    userName,
  } = props;

  const [input, setInput] = useState("");
  const chatsRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (chatsRef.current) {
      chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
    }
  });

  const handleSendMessage = () => {
    currentChannel.push("send_message", {
      message: {
        content: input,
        author_id: userId,
        recipient_id: activeRecipientId,
        thread_id: currentThreadId,
      },
    });
    setInput("");
  };

  if (threadsObject) {
    const { threads, recipients } = threadsObject;
    const thread = threads.filter(
      (thread) =>
        thread.thread_users.filter((user) => user.id === activeRecipientId)
          .length > 0
    )[0];

    return (
      <styled.ChatBodyWrapper>
        <styled.Header>
          {userName}
          <styled.HeaderOptions>
            <ThreeDotsIcon size={17} color={Color.lightBlack} />
          </styled.HeaderOptions>
        </styled.Header>

        <styled.MessagesBody
          isMessagesValid={!isMessagesValid || !currentThreadId}
        >
          {!isMessagesValid || !currentThreadId ? (
            <ChatIcon size={200} color={Color.gray} />
          ) : (
            <>
              <styled.Chats ref={chatsRef}>
                <ChatMessageComponent
                  messages={thread?.messages}
                  recipients={recipients}
                  activeRecipientId={activeRecipientId}
                />
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
            </>
          )}
        </styled.MessagesBody>
      </styled.ChatBodyWrapper>
    );
  }
};
