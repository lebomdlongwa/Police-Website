import React from "react";
import * as styled from "./styles";

type AvatarProps = {
  initials: string;
  color?: string;
  className?: string;
  fontSize?: number;
  avatarSize?: number;
  square?: boolean;
};

export const AvatarComponent = (props: AvatarProps) => {
  const {
    initials,
    color: backgroundColor,
    fontSize,
    avatarSize,
    square = true,
  } = props;

  return (
    <styled.AvatarWrapper
      backgroundColor={backgroundColor}
      avatarSize={avatarSize}
      square={square}
    >
      <styled.Avatar fontSize={fontSize}>
        {initials.toLocaleUpperCase()}
      </styled.Avatar>
    </styled.AvatarWrapper>
  );
};
