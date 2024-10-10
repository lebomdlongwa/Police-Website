import React from "react";
import * as styled from "./styles";

type AvatarProps = {
  initials: string;
  color?: string;
  className?: string;
  fontSize?: number;
  avatarSize?: number;
};

export const AvatarComponent = (props: AvatarProps) => {
  const { initials, color: backgroundColor, fontSize, avatarSize } = props;

  return (
    <styled.AvatarWrapper
      backgroundColor={backgroundColor}
      avatarSize={avatarSize}
    >
      <styled.Avatar fontSize={fontSize}>{initials}</styled.Avatar>
    </styled.AvatarWrapper>
  );
};
