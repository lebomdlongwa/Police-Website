import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { AvatarComponent } from "../../../../components/Avatar/avatar";

export const ChatMessageWrapper = styled.div.attrs<{ isCurrentUser: boolean }>({
  className: "ChatMessageWrapper",
})`
  max-width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 7px;
  justify-content: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
`;

export const ChatMessage = styled.div.attrs({
  className: "ChatMessage",
})`
  max-width: calc(70% - 40px);
  border-radius: 15px;
  background-color: ${Color.darkCyan};
  color: ${Color.white};
  font-size: 15px;
  font-weight: 400;
  padding: 7px 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ChatAvatarWrapper = styled.div.attrs({
  className: "ChatAvatarWrapper",
})`
  width: 28px;
  height: 28px;
`;
