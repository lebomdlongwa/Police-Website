import React from "react";
import { Icon } from "./icon";
import { Color } from "../colorCodes";

export const CalendarIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg
      fill={c as string}
      width={`${w}px`}
      height={`${h}px`}
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
    >
      <g>
        <polygon points="37.99,0 36.781,0 34,0 33.959,0 33.959,4 33.959,4.719 33.959,10.438 37.99,10.438  " />

        <path d="M40.99,4v6.438h0.052V13.5H30.959v-3.062V4H16.99v6.438h0.052V13.5H6.958v-3.062h0.062V4H0v11.9v4V48h48v-9v-4v-5v-4v-6.1   v-4V4H40.99z M9.833,44H4v-5h5.833V44z M9.833,35H4v-5h5.833V35z M9.833,26H4v-6.1h5.833V26z M22,44h-8.167v-5H22V44z M22,35   h-8.167v-5H22V35z M22,26h-8.167v-6.1H22V26z M33.917,44H26v-5h7.917V44z M33.917,35H26v-5h7.917V35z M33.917,26H26v-6.1h7.917V26z    M44,44h-6.083v-5H44V44z M44,35h-6.083v-5H44V35z M44,26h-6.083v-6.1H44V26z" />

        <rect height="10.438" width="3.969" x="10.021" />
      </g>
    </svg>
  );
};
