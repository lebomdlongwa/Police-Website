import React from "react";
import * as styled from "./styles";

export type ButtonProps = {
  // size?: "small" | "medium" | "large";
  text: string;
  fontOnHover?: string;
  buttonColor?: string;
  fontColor?: string;
  // rounded?: boolean;
  onClick?: any;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <styled.Wrapper>
      <styled.ButtonContent {...props}>{text}</styled.ButtonContent>
    </styled.Wrapper>
  );
};
