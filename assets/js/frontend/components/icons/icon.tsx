import React, { ReactNode } from "react";

export const Icon = (props: IconProps) => {
  // h = height, w = width, c = color
  const { h = "15px", c = "#989898", w = "15px", children } = props;

  return (
    <svg fill={c as string} width={w} height={h} viewBox="0 0 32 32">
      {children}
    </svg>
  );
};
