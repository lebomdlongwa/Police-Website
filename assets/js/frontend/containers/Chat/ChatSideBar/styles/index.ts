import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

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

export const NewChat = styled.div.attrs({
  className: "NewChat",
})`
  width: 90%;
  height: 90%;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.darkCyan};
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const UsersContainer = styled.div.attrs<{ active?: boolean }>({
  className: "UsersContainer",
})`
  height: calc(100% - 50px);
  width: 100%;
  border-left: ${({ active }) => active && `4px solid ${Color.darkBlue}`};
  /* background: ${({ active }) => active && `${Color.lightgray}`}; */
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const UserChatWrapper = styled.div.attrs<{
  active?: boolean;
  noShadow?: true;
}>({
  className: "UserChatWrapper",
})`
  height: 65px;
  width: 100%;
  margin: auto;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ active }) =>
    active ? `none` : `2px solid ${Color.grayLighter} `};
  curser: pointer;

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${({ noShadow }) => (noShadow ? "none" : "#d3d3d3")};
    curser: pointer;
  }
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

export const UserTimestampWrapper = styled.div.attrs({
  className: "UserTimestampWrapper",
})`
  display: flex;
  justify-content: space-between;
`;

export const User = styled.div.attrs({
  className: "User",
})`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`;

export const MessageTimestamp = styled.div.attrs({
  className: "MessageTimestamp",
})`
  font-size: 13px;
  font-weight: 400;
  color: ${Color.gray};
`;

export const MessageNotificationWrapper = styled.div.attrs({
  className: "MessageNotificationWrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Notification = styled.div.attrs({
  className: "Notification",
})`
  width: 16px;
  height: 16px;
  background-color: ${Color.red};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
`;
