import React from "react";
import { Color } from "../colorCodes";

export const SearchIcon = (props: IconProps) => {
  const { h = 15, c = Color.iconGray, w = 15 } = props;

  return (
    <svg width={`${w}px`} height={`${h}px`} viewBox="0 0 24 24" fill="none">
      <path
        d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={c as string}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
