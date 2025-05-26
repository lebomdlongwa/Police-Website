import React, { useEffect, useRef, useState } from "react";

import { Channel } from "phoenix";

import { ChatMessageComponent } from "./chatMessage";
import * as styled from "./styles/chatBody";

import { ThreeDotsIcon } from "../../../components/icons/threeDots";
import { Color } from "../../../components/colorCodes";
import { ClipIcon } from "../../../components/icons/clip";
import { Icon } from "../../../components/icons";
import { find } from "lodash";

type ChatBodyProps = {
  currentChannel: Channel;
  isMessagesValid: boolean;
  threadsObject: ThreadsObject;
  activeRecipientId: string;
  currentThreadId: string;
  user: UserObject;
};

export const ChatBody = (props: ChatBodyProps) => {
  const {
    currentChannel,
    isMessagesValid,
    threadsObject,
    activeRecipientId,
    currentThreadId,
    user,
  } = props;

  const [input, setInput] = useState("");
  const chatsRef = useRef<HTMLDivElement | null>();
  const { threads, recipients } = threadsObject;

  const userId = user?.id;
  const userName = `${user?.name} ${user?.surname}`;
  const recipient = find(recipients, { id: activeRecipientId });
  const recipientName = `${recipient?.name} ${recipient?.surname}`;

  const thread = threads.filter(
    (thread) =>
      thread.thread_users.filter((user) => user.user_id === activeRecipientId)
        .length > 0
  )[0];

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

  return (
    <styled.ChatBodyWrapper>
      <styled.Header>
        {activeRecipientId ? recipientName : userName}
        <styled.HeaderOptions>
          <ThreeDotsIcon size={17} color={Color.lightBlack} />
        </styled.HeaderOptions>
      </styled.Header>

      <styled.MessagesBody
        isMessagesValid={!isMessagesValid || !currentThreadId}
      >
        {!isMessagesValid || !currentThreadId ? (
          <Icon name="squareChat" size={300} />
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
              <styled.ButtonWrapper>
                <ClipIcon size={27} color={Color.darkCyan} />
              </styled.ButtonWrapper>
              <styled.MessageBoxWrapper>
                <styled.MessageBox
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </styled.MessageBoxWrapper>
              <styled.ButtonWrapper>
                <styled.SendButton onClick={handleSendMessage}>
                  <Icon name="send" size={30} />
                </styled.SendButton>
              </styled.ButtonWrapper>
            </styled.MessageBoxContainer>
          </>
        )}
      </styled.MessagesBody>
    </styled.ChatBodyWrapper>
  );
};
