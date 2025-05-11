import React, { useState } from "react";

import { find, isEmpty, sortBy } from "lodash";

import * as styled from "./styles/index";

import { AvatarComponent } from "../../../components/Avatar/avatar";
import { AvatarColors } from "../../../components/colorCodes";
import { initializeThread, setSeenTrue } from "../actions";

type ChatSideBarProps = {
  onSetActiveRecipientId: (id: string) => void;
  userId: string;
  noData: boolean;
  threadsObject: ThreadsObject;
  activeRecipientId: string;
  onSetCurrentThreadId: (id: string) => void;
  currentConvoIdRef: React.MutableRefObject<any>;
  onUpdateThreadsObj: (
    obj: ThreadsObject | ((prev: ThreadsObject) => ThreadsObject)
  ) => void;
};

export const ChatSideBar = (props: ChatSideBarProps) => {
  const {
    onSetActiveRecipientId,
    onSetCurrentThreadId,
    threadsObject,
    userId,
    noData,
    currentConvoIdRef,
    onUpdateThreadsObj,
  } = props;

  if (threadsObject) {
    const { threads, recipients } = threadsObject;

    return (
      <styled.SideBarWrapper>
        <styled.Header>Chats</styled.Header>
        <styled.UsersContainer>
          {!isEmpty(threads) ? (
            threads.map((thread: Thread) => {
              const chatRecipient = thread.thread_users.filter(
                (x) => x.id !== userId
              )[0];
              const recipient = find(recipients, { id: chatRecipient.id });
              const lastMessage = sortBy(
                thread.messages,
                "inserted_at"
              ).reverse()[0];
              const avatarColors = Object.values(AvatarColors);
              const avatarColor =
                avatarColors[Number(recipient?.id) % avatarColors.length];

              const handleRecipientClick = () => {
                onSetActiveRecipientId(recipient?.id);
                onSetCurrentThreadId(thread.id);
                currentConvoIdRef.current = thread.id;

                setSeenTrue(thread.id)
                  .then(() => {
                    onUpdateThreadsObj((prev) => {
                      return {
                        ...prev,
                        threads: prev.threads.map((thd: Thread) => {
                          if (thd.id !== currentConvoIdRef.current) return thd;

                          return {
                            ...thd,
                            messages: thd.messages.map((msg) =>
                              msg.seen ? msg : { ...msg, seen: true }
                            ),
                          };
                        }),
                      };
                    });
                  })
                  .catch((err) =>
                    console.log("Error while updating threadsObject", err)
                  );
              };

              const unSeenMessagesCount = (thread.messages || []).filter(
                (message) => !message.seen
              ).length;

              return (
                <styled.UserChatWrapper onClick={handleRecipientClick}>
                  <styled.UserChatContainer>
                    <AvatarComponent
                      initials={recipient?.avatar}
                      avatarSize={37}
                      color={avatarColor}
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
                        {unSeenMessagesCount > 0 && (
                          <styled.Notification>
                            {unSeenMessagesCount}
                          </styled.Notification>
                        )}
                      </styled.MessageNotificationWrapper>
                    </styled.UserMessageWrapper>
                  </styled.UserChatContainer>
                </styled.UserChatWrapper>
              );
            })
          ) : (
            <>
              {noData && (
                <styled.UserChatWrapper
                  onClick={() => initializeThread(userId)}
                  active={true}
                  noShadow
                >
                  <styled.NewChat>Police Reception</styled.NewChat>
                </styled.UserChatWrapper>
              )}
            </>
          )}
        </styled.UsersContainer>
      </styled.SideBarWrapper>
    );
  }
};
