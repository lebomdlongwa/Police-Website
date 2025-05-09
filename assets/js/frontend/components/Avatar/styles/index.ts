import styled from "styled-components";
import { Color } from "../../colorCodes";

export const AvatarWrapper = styled.div.attrs<{
  backgroundColor?: string;
  avatarSize?: number;
  square?: boolean;
}>({
  className: "AvatarWrapper",
})`
  height: ${({ avatarSize }) => (avatarSize ? `${avatarSize}px` : "50px")};
  width: ${({ avatarSize }) => (avatarSize ? `${avatarSize}px` : "50px")};
  border-radius: ${({ square }) => (!square ? `50%` : "5px")};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${Color.veryDarkBlue}`};
`;

export const Avatar = styled.div.attrs<{ fontSize?: number }>({
  className: "Avatar",
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "20px")};
  font-weight: 600;
`;
