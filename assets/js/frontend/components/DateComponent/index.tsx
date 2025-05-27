import React from "react";
import * as styled from "./styles";
import { CalendarIcon } from "../icons/calendar";
import { Color } from "../colorCodes";

export const DatePickerComponent = () => {
  return (
    <styled.CalendarInputWrapper>
      <styled.FormInput placeholder="Enter date seen..." />
      <CalendarIcon size={20} color={Color.blue} />
    </styled.CalendarInputWrapper>
  );
};
