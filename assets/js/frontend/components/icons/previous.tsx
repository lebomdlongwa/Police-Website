import React from "react";
import { Color } from "../colorCodes";

export const PreviousIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg
      fill={c as string}
      width={`${w}px`}
      height={`${h}px`}
      viewBox="0 0 24 24"
    >
      <g id="previous">
        <g>
          <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		" />
        </g>
      </g>
    </svg>
  );
};
