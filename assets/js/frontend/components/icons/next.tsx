import React from "react";
import { Color } from "../colorCodes";

export const NextIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg
      fill={c as string}
      width={`${w}px`}
      height={`${h}px`}
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      viewBox="0 0 42 42"
    >
      <polygon
        fill-rule="evenodd"
        points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "
      />
    </svg>
  );
};
