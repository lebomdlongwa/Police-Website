import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { AvatarComponent } from "../../../../components/Avatar/avatar";

export const ChatMessageWrapper = styled.div.attrs({
  className: "ChatMessageWrapper",
})`
  max-width: 70%;
  display: flex;
  gap: 8px;
`;

export const ChatMessage = styled.div.attrs({
  className: "ChatMessage",
})`
  max-width: calc(100% - 40px);
  border-radius: 15px;
  background-color: ${Color.darkBlue};
  color: ${Color.white};
  font-size: 15px;
  font-weight: 400;
  padding: 7px 15px;
`;

export const ChatAvatar = styled(AvatarComponent).attrs({
  className: "ChatAvatar",
})`
  width: 20px;
  height: 20px;
`;
