import styled from "styled-components";
import { Color } from "../../colorCodes";

export const AvatarWrapper = styled.div.attrs<{
  backgroundColor?: string;
  avatarSize?: number;
}>({
  className: "AvatarWrapper",
})`
  height: ${({ avatarSize }) => (avatarSize ? `${avatarSize}px` : "50px")};
  width: ${({ avatarSize }) => (avatarSize ? `${avatarSize}px` : "50px")};
  border-radius: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${Color.navyBlueLighter}`};
  margin-right: 30px;
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
