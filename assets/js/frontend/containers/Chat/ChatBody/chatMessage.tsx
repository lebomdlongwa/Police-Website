import React from "react";
import * as styled from "./styles/chatMessage";
import { useUser } from "../../userContext";
import { find, sortBy } from "lodash";

type ChatMessageComponentProps = {
  messages: Message[];
  activeRecipientId: string;
  recipients: User[];
};

export const ChatMessageComponent = (props: ChatMessageComponentProps) => {
  const { messages, recipients } = props;
  const { user } = useUser();

  const sortedMessages = sortBy(messages, "inserted_at");

  const AvatarElement = (initials: string) => (
    <styled.ChatAvatar initials={initials} avatarSize={28} fontSize={13} />
  );

  return (
    <>
      {Array.isArray(sortedMessages) &&
        sortedMessages.map((message) => {
          const author = find(recipients, { id: message.author_id }) || user;
          const isCurrentUser = author.id === user.id;

          return (
            <styled.ChatMessageWrapper
              key={message.id}
              isCurrentUser={isCurrentUser}
            >
              {!isCurrentUser && AvatarElement(author.name[0])}
              <styled.ChatMessage>{message.content}</styled.ChatMessage>
              {isCurrentUser && AvatarElement(author.name[0])}
            </styled.ChatMessageWrapper>
          );
        })}
    </>
  );
};
