import React, { useState } from "react";
import * as styled from "./styles/index";
import { AvatarComponent } from "../../../components/Avatar/avatar";
import { UpCaretIcon } from "../../../components/icons/upCaret";
import { DownCaretIcon } from "../../../components/icons/downCaret";
import { get, isEmpty } from "lodash";

type ChatSideBarProps = {
  messages: Message[];
};

export const ChatSideBar = (props: ChatSideBarProps) => {
  const { messages } = props;

  const [unReadClicked, setUnReadClicked] = useState(false);
  const [readClicked, setReadClicked] = useState(false);

  const handleCarot = (type: string) => {
    if (type === "read") {
      setReadClicked(!readClicked);
    } else {
      setUnReadClicked(!unReadClicked);
    }
  };

  const unReadMessagesCarot = !unReadClicked ? (
    <DownCaretIcon size={13} color="#333" />
  ) : (
    <UpCaretIcon size={13} color="#333" />
  );

  const readMessagesCarot = !readClicked ? (
    <DownCaretIcon size={13} color="#333" />
  ) : (
    <UpCaretIcon size={13} color="#333" />
  );

  return (
    <styled.SideBarWrapper>
      <styled.Header>Chats</styled.Header>
      <styled.ChatWrapper>
        <styled.UnReadChatsWrapper>
          <styled.ChatHeader onClick={() => handleCarot("unRead")}>
            <styled.CarotWrapper>{unReadMessagesCarot}</styled.CarotWrapper>
            UnRead Chats
          </styled.ChatHeader>
          {!unReadClicked && (
            // unReadArr.map((item) => (
            <styled.MessageContainer>
              <styled.UserChatWrapper>
                <styled.UserChatContainer>
                  <AvatarComponent initials="L" avatarSize={37} />
                  <styled.UserMessageWrapper>
                    <styled.User>Jamie Vardy</styled.User>
                    <styled.Message>
                      {!isEmpty(messages) && messages.slice(-1)[0].content}
                    </styled.Message>
                  </styled.UserMessageWrapper>
                </styled.UserChatContainer>
              </styled.UserChatWrapper>
            </styled.MessageContainer>
            // )
          )}
        </styled.UnReadChatsWrapper>
        <styled.ReadChatsWrapper>
          <styled.ChatHeader onClick={() => handleCarot("read")}>
            <styled.CarotWrapper>{readMessagesCarot}</styled.CarotWrapper>
            Read Chats
          </styled.ChatHeader>
          {/* {!readClicked &&
            unReadArr.map((item) => (
              <styled.MessageContainer active={item.active}>
                <styled.UserChatWrapper>
                  <styled.UserChatContainer>
                    <AvatarComponent initials={item.avatar} avatarSize={37} />
                    <styled.UserMessageWrapper>
                      <styled.User>{item.user}</styled.User>
                      <styled.Message>{item.message}</styled.Message>
                    </styled.UserMessageWrapper>
                  </styled.UserChatContainer>
                </styled.UserChatWrapper>
              </styled.MessageContainer>
            ))} */}
        </styled.ReadChatsWrapper>
      </styled.ChatWrapper>
    </styled.SideBarWrapper>
  );
};
