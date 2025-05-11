import React from "react";

import { find, sortBy } from "lodash";

import * as styled from "./styles/chatMessage";

import { useUser } from "../../userContext";
import { AvatarColors } from "../../../components/colorCodes";
import { AvatarComponent } from "../../../components/Avatar/avatar";

type ChatMessageComponentProps = {
  messages: Message[];
  activeRecipientId: string;
  recipients: User[];
};

export const ChatMessageComponent = (props: ChatMessageComponentProps) => {
  const { messages, recipients } = props;
  const { user } = useUser();

  const sortedMessages = sortBy(messages, "inserted_at");

  const AvatarElement = (
    initials: string,
    color: string,
    displayAvatar: boolean
  ) => (
    <styled.ChatAvatarWrapper>
      {displayAvatar && (
        <AvatarComponent
          color={color}
          initials={initials}
          avatarSize={28}
          fontSize={13}
        />
      )}
    </styled.ChatAvatarWrapper>
  );

  return (
    <>
      {Array.isArray(sortedMessages) &&
        sortedMessages.map((message, id) => {
          const author = find(recipients, { id: message.author_id }) || user;
          const isCurrentUser = author.id === user.id;
          const displayAvatar =
            sortedMessages[id]?.author_id !== sortedMessages[id - 1]?.author_id;

          const colors = Object.values(AvatarColors);
          const avatarColor = colors[author.id % colors.length];

          return (
            <styled.ChatMessageWrapper
              key={message.id}
              isCurrentUser={isCurrentUser}
            >
              {!isCurrentUser &&
                AvatarElement(author.name[0], avatarColor, displayAvatar)}
              <styled.ChatMessage>{message.content}</styled.ChatMessage>
              {isCurrentUser &&
                AvatarElement(author.name[0], avatarColor, displayAvatar)}
            </styled.ChatMessageWrapper>
          );
        })}
    </>
  );
};
