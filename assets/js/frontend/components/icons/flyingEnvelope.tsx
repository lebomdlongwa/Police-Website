import React from "react";
import { Color } from "../colorCodes";

export const FlyingEnvelopeIcon = (props: IconProps) => {
  const { size = 15, color = Color.iconGray } = props;

  return (
    <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 32 32">
      <style type="text/css">
        {`.stone_een${`fill:#333;`}`}
        {`.st0${`fill:#333;`}`}
      </style>
      <path
        d="M10.774,23.619l-1.625,5.691C9.06,29.164,9,28.992,9,28.794v-5.57l13.09-12.793L10.774,23.619z
	 M10.017,29.786c0.243-0.002,0.489-0.084,0.69-0.285l3.638-3.639l-2.772-1.386L10.017,29.786z M28.835,2.009L3.802,14.326
	c-2.226,1.095-2.236,4.266-0.017,5.375l4.89,2.445L27.464,3.79c0.204-0.199,0.516-0.234,0.759-0.086
	c0.326,0.2,0.396,0.644,0.147,0.935l-16.3,18.976l8.84,4.4c1.746,0.873,3.848-0.128,4.27-2.034l5.071-22.858
	C30.435,2.304,29.588,1.639,28.835,2.009z"
      />
    </svg>
  );
};
