import React from "react";
import { Color } from "../colorCodes";

export const MailboxIcon = (props: IconProps) => {
  const { size = 15, color = Color.iconGray } = props;

  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill={color as string}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5,21H19a2,2,0,0,0,2-2V6a3,3,0,0,0-3-3H6A3,3,0,0,0,3,6V19A2,2,0,0,0,5,21ZM5,6A1,1,0,0,1,6,5H18a1,1,0,0,1,1,1v5.5a.5.5,0,0,1-.5.5H15.471a.492.492,0,0,0-.5.407,3,3,0,0,1-5.946,0,.492.492,0,0,0-.5-.407H5.5a.5.5,0,0,1-.5-.5Z" />
    </svg>
  );
};
