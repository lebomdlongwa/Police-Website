import React from "react";
import * as styled from "./styles";

type AvatarProps = {
  initials: string;
  color?: string;
};

export const AvatarComponent = (props: AvatarProps) => {
  const { initials, color: backgroundColor } = props;

  return (
    <styled.AvatarWrapper backgroundColor={backgroundColor}>
      <styled.Avatar>{initials} </styled.Avatar>
    </styled.AvatarWrapper>
  );
};
