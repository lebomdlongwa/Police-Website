import React from "react";
import { Color } from "../colorCodes";

export const ClockIcon = (props: IconProps) => {
  const { size = 15, color = Color.iconGray } = props;

  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24">
      <title />

      <g id="Complete">
        <g id="Clock">
          <g>
            <polyline
              fill="none"
              points="11.9 5.9 11.9 11.9 12 12 14.1 14.1"
              stroke={color as string}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />

            <circle
              cx="12"
              cy="12"
              data-name="Circle"
              fill="none"
              id="Circle-2"
              r="10"
              stroke={color as string}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
