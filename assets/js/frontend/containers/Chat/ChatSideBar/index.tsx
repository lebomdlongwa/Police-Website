import React, { useState } from "react";

import { find, isEmpty } from "lodash";

import * as styled from "./styles/index";

import { AvatarComponent } from "../../../components/Avatar/avatar";

type ChatSideBarProps = {
  onSetActiveRecipientId: (id: string) => void;
  userId: string;
  threadsObject: ThreadsObject;
  activeRecipientId: string;
  onSetCurrentThreadId: (id: string) => void;
};

export const ChatSideBar = (props: ChatSideBarProps) => {
  const {
    onSetActiveRecipientId,
    onSetCurrentThreadId,
    threadsObject,
    userId,
  } = props;

  if (threadsObject) {
    const { threads, recipients } = threadsObject;

    return (
      <styled.SideBarWrapper>
        <styled.Header>Chats</styled.Header>
        <styled.UsersContainer>
          {!isEmpty(threads) &&
            threads.map((thread: Thread) => {
              const chatRecipient = thread.thread_users.filter(
                (x) => x.id !== userId
              )[0];
              const recipient = find(recipients, { id: chatRecipient.id });
              const lastMessage = thread.messages.slice(-1)[0];
              const isLastMessageRecipient =
                lastMessage?.author_id === recipient?.id;

              return (
                <styled.UserChatWrapper
                  onClick={() => {
                    onSetActiveRecipientId(recipient?.id);
                    onSetCurrentThreadId(thread.id);
                  }}
                >
                  <styled.UserChatContainer>
                    <AvatarComponent
                      initials={recipient?.avatar}
                      avatarSize={37}
                    />
                    <styled.UserMessageWrapper>
                      <styled.UserTimestampWrapper>
                        <styled.User>
                          {recipient?.name} {recipient?.surname}
                        </styled.User>
                        <styled.MessageTimestamp>23:09</styled.MessageTimestamp>
                      </styled.UserTimestampWrapper>
                      <styled.MessageNotificationWrapper>
                        <styled.Message>{lastMessage?.content}</styled.Message>
                        {isLastMessageRecipient && (
                          <styled.Notification>1</styled.Notification>
                        )}
                      </styled.MessageNotificationWrapper>
                    </styled.UserMessageWrapper>
                  </styled.UserChatContainer>
                </styled.UserChatWrapper>
              );
            })}
        </styled.UsersContainer>
      </styled.SideBarWrapper>
    );
  }
};
