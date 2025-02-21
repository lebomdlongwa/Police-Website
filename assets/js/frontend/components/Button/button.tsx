import React, { CSSProperties } from "react";
import * as styled from "./styles";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  text: string;
  fontOnHover?: string;
  buttonColor?: string;
  buttonColorOnHover?: string;
  fontColor?: string;
  borderColor?: string;
  rounded?: boolean;
  onClick?: any;
  className?: string;
  paddingSides?: number;
  paddingTopBottom?: number;
  customStyles?: CSSProperties | undefined;
};

export const Button = (props: ButtonProps) => {
  const { text, customStyles } = props;

  return (
    <styled.Wrapper style={customStyles}>
      <styled.ButtonContent {...props}>{text}</styled.ButtonContent>
    </styled.Wrapper>
  );
};
