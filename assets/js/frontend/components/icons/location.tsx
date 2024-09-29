import React from "react";
import { Color } from "../colorCodes";

export const LocationIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg
      fill={c as string}
      width={`${w}px`}
      height={`${h}px`}
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
    >
      <g>
        <path
          fill={c as string}
          d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14
		s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
        />
        <path
          fill={c as string}
          d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34
		c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
        />
      </g>
    </svg>
  );
};
