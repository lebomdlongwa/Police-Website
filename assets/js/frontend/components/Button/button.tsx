import React from "react";
import * as styled from "./styles";

export type ButtonProps = {
  // size?: "small" | "medium" | "large";
  text: string;
  // colorOnHover?: string;
  color?: string;
  // rounded?: boolean;
  onClick?: any;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  // const { size, text, color, rounded = false, colorOnHover = color } = props;
  const { text, color } = props;

  // const buttonSettings = {
  //   size: size,
  //   color: color,
  //   rounded: rounded,
  //   colorOnHover: colorOnHover,
  // };

  return (
    <styled.Wrapper {...props}>
      <styled.ButtonContent color={color}>{text}</styled.ButtonContent>
    </styled.Wrapper>
  );
};
