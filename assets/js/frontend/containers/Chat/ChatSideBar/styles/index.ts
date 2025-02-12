import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { HideScrollBarMixin } from "../../../../appStyles";

export const SideBarWrapper = styled.div.attrs({
  className: "SideBarWrapper",
})`
  width: 25%;
  height: 100%;
  background-color: ${Color.chalk};
  border-right: 2px solid ${Color.grayLighter};
`;

export const Header = styled.div.attrs({
  className: "Header",
})`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${Color.grayLighter};
  padding-left: 20px;
  color: #333;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 18px;
`;

export const ChatWrapper = styled.div.attrs({
  className: "ChatWrapper",
})`
  width: 100%;
`;

export const UnReadChatsWrapper = styled.div.attrs({
  className: "UnReadChatsWrapper",
})`
  width: 100%;
  max-height: 50%;

  ${HideScrollBarMixin}
`;

export const ReadChatsWrapper = styled.div.attrs({
  className: "ReadChatsWrapper",
})`
  width: 100%;
  max-height: 50%;

  ${HideScrollBarMixin}
`;

export const ChatHeader = styled.div.attrs({
  className: "ChatHeader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding-left: 30px;
  color: #333;
  font-size: 16px;
  border-bottom: 2px solid ${Color.grayLighter};

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }
`;

export const CarotWrapper = styled.div.attrs({
  className: "CarotWrapper",
})``;

export const MessageContainer = styled.div.attrs<{ active?: boolean }>({
  className: "MessageContainer",
})`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  border-left: ${({ active }) => active && `4px solid ${Color.darkBlue}`};
  /* background: ${({ active }) => active && `${Color.lightgray}`}; */
`;

export const UserChatWrapper = styled.div.attrs<{ active?: boolean }>({
  className: "UserChatWrapper",
})`
  height: 100%;
  width: 95%;
  margin: auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: ${({ active }) =>
    active ? `none` : `2px solid ${Color.grayLighter} `};
`;

export const UserChatContainer = styled.div.attrs({
  className: "UserChatContainer",
})`
  margin: auto;
  width: 87%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserMessageWrapper = styled.div.attrs({
  className: "UserMessageWrapper",
})`
  width: calc(100% - 55px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const User = styled.div.attrs({
  className: "User",
})`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`;

export const Message = styled.div.attrs({
  className: "Message",
})`
  margin-top: 3px;
  height: 15px;
  color: gray;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
