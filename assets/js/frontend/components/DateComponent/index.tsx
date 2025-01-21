import React from "react";
import * as styled from "./styles";
import { CalendarIcon } from "../icons/calendar";
import { DeleteIcon } from "../icons/delete";
import { Color } from "../colorCodes";

export const DatePickerComponent = () => {
  return (
    <styled.CalendarInputWrapper>
      <styled.FormInput placeholder="Select" />
      <CalendarIcon size={20} color={Color.blue} />
      <styled.ClearInput>
        <DeleteIcon size={20} />
      </styled.ClearInput>
    </styled.CalendarInputWrapper>
  );
};
