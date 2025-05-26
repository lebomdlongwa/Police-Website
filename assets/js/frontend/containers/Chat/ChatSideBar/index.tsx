import React from "react";

import { Channel } from "phoenix";
import { find, isEmpty, sortBy } from "lodash";

import * as styled from "./styles/index";
import { initializeThread, setSeenTrue } from "../actions";

import { AvatarComponent } from "../../../components/Avatar/avatar";
import { AvatarColors } from "../../../components/colorCodes";
import { Notification } from "./notification";

type ChatSideBarProps = {
  onSetActiveRecipientId: (id: string) => void;
  user: UserObject;
  noData: boolean;
  threadsObject: ThreadsObject;
  activeRecipientId: string;
  userChannel: Channel;
  onSetCurrentThreadId: (id: string) => void;
  currentConvoIdRef: React.MutableRefObject<any>;
  onFetchAndSetUserThreads: () => Promise<void>;
  onUpdateThreadsObj: (
    obj: ThreadsObject | ((prev: ThreadsObject) => ThreadsObject)
  ) => void;
};

export const ChatSideBar = (props: ChatSideBarProps) => {
  const {
    onSetActiveRecipientId,
    onSetCurrentThreadId,
    threadsObject,
    user,
    noData,
    currentConvoIdRef,
    userChannel,
    onUpdateThreadsObj,
    onFetchAndSetUserThreads,
  } = props;

  if (threadsObject) {
    const { threads, recipients } = threadsObject;

    const handleInitializeThread = () => {
      initializeThread(user?.id)
        .then((response) => {
          onFetchAndSetUserThreads();

          userChannel.push("thread_initialized", {
            thread: response,
          });
        })
        .catch((err) => err);
    };

    const sortedThreads = sortBy(threads, (thread) => {
      const messages = thread.messages || [];
      const lastMessage = messages.at(-1);
      return lastMessage?.inserted_at;
    }).reverse();

    const activeSortedThreads = sortedThreads.filter((thread) => {
      const messages = thread.messages || [];
      const lastMessage = messages.at(-1);
      return lastMessage?.inserted_at;
    });

    const selectedThreads = user?.admin ? activeSortedThreads : sortedThreads;

    return (
      <styled.SideBarWrapper>
        <styled.Header>Chats</styled.Header>
        <styled.UsersContainer>
          {!isEmpty(selectedThreads) ? (
            selectedThreads.map((thread: Thread) => {
              const chatRecipient = thread.thread_users.filter(
                (x) => x.user_id !== user?.id
              )[0];
              const recipient = find(recipients, { id: chatRecipient.user_id });
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
                    userChannel.push("message_status_changed", {
                      thread_id: thread.id,
                      recipient_id: recipient?.id,
                    });
                  })
                  .catch((err) =>
                    console.log("Error while updating threadsObject", err)
                  );
              };

              const isUserLastMessageAuthor =
                lastMessage?.author_id === user?.id;
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
                        <styled.MessageTimestamp>
                          {lastMessage?.inserted_at}
                        </styled.MessageTimestamp>
                      </styled.UserTimestampWrapper>
                      <styled.MessageNotificationWrapper>
                        <styled.Message>{lastMessage?.content}</styled.Message>
                        <Notification
                          unSeenMessagesCount={unSeenMessagesCount}
                          isUserLastMessageAuthor={isUserLastMessageAuthor}
                        />
                      </styled.MessageNotificationWrapper>
                    </styled.UserMessageWrapper>
                  </styled.UserChatContainer>
                </styled.UserChatWrapper>
              );
            })
          ) : (
            <>
              {noData && !user?.admin && (
                <styled.UserChatWrapper
                  onClick={handleInitializeThread}
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
