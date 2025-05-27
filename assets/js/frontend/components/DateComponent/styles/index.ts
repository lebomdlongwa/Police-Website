import styled from "styled-components";
import { Color } from "../../colorCodes";

export const CalendarInputWrapper = styled.div.attrs({
  className: "CalendarInputWrapper",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Color.lightgray};
  border-radius: 4px;
  padding: 10px;
`;

export const FormInput = styled.input.attrs<{ width?: number }>({
  className: "FormInput",
  type: "text",
})`
  border: none;
  flex: 1;
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  color: ${Color.black};
  font-size: 16px;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

export const ClearInput = styled.div.attrs({
  className: "ClearInput",
})`
  height: 70%;
  border-left: 1px solid ${Color.lightgray};
  margin-left: 10px;
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
