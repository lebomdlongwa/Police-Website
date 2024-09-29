import styled from "styled-components";
import { DropdownProps } from "../dropdown";

export const DropdownWrapper = styled.div.attrs({
  className: "DropdownWrapper",
})`
  border: 1px solid lightgray;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  /* The below css rules are for development purposes */
  margin: 50px;
  width: 400px;
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  width: 100%;
  /* height: 100%; */
`;

export const Option = styled.div.attrs<{ dropdownSettings: DropdownProps }>({
  className: "Option",
})`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${({ dropdownSettings }) => dropdownSettings.fontColor};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ dropdownSettings }) =>
      dropdownSettings.backgroundColorOnHover};
    transition: 200ms ease;
    cursor: pointer;
    color: ${({ dropdownSettings }) => dropdownSettings.fontColorOnHover};
  }
`;
