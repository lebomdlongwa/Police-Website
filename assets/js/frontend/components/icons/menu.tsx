import React from "react";
import { Color } from "../colorCodes";

export const MenuIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg width={`${w}px`} height={`${h}px`} viewBox="0 0 25 25" fill="none">
      <path
        d="M6 8.1H19V6.9H6V8.1ZM6 18.1H19V16.9H6V18.1ZM6 13.1H19V11.9H6V13.1Z"
        fill={c as string}
      />
    </svg>
  );
};
