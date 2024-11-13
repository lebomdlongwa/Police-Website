import React, { useState } from "react";
import * as styled from "./styles/index";
import { AvatarComponent } from "../../../components/Avatar/avatar";
import { UpCaretIcon } from "../../../components/icons/upCaret";
import { Color } from "../../../components/colorCodes";
import { DownCaretIcon } from "../../../components/icons/downCaret";

export const ChatSideBar = () => {
  const [unReadClicked, setUnReadClicked] = useState(true);
  const [readClicked, setReadClicked] = useState(true);

  const unReadArr = [
    {
      avatar: "L",
      user: "Lebohang Mdlongwa",
      message:
        "Somebody entered our house at night and stole all the car windows",
      active: true,
    },
    {
      avatar: "A",
      user: "Amanda Nyoni",
      message: "Chelsea is doing good this season and i am so happy njani",
      active: false,
    },
    {
      avatar: "G",
      user: "Gatsheni Sibanda",
      message:
        "Somebody entered our house at night and stole all the car windows",
      active: false,
    },
    {
      avatar: "W",
      user: "Willington Gumbo",
      message:
        "Somebody entered our house at night and stole all the car windows",
      active: false,
    },
  ];

  const handleCarot = (type: string) => {
    if (type === "read") {
      setReadClicked(!readClicked);
    } else {
      setUnReadClicked(!unReadClicked);
    }
  };

  const unReadMessagesCarot = unReadClicked ? (
    <DownCaretIcon size={13} color="#333" />
  ) : (
    <UpCaretIcon size={13} color="#333" />
  );

  const readMessagesCarot = readClicked ? (
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
          {unReadArr.map((item) => (
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
          ))}
        </styled.UnReadChatsWrapper>
        <styled.ReadChatsWrapper>
          <styled.ChatHeader onClick={() => handleCarot("read")}>
            <styled.CarotWrapper>{readMessagesCarot}</styled.CarotWrapper>
            Read Chats
          </styled.ChatHeader>
          {unReadArr.map((item) => (
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
          ))}
        </styled.ReadChatsWrapper>
      </styled.ChatWrapper>
    </styled.SideBarWrapper>
  );
};
