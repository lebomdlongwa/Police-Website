import styled from "styled-components";
import { DropdownProps } from "../dropdown";

export const DropdownContainer = styled.div.attrs({
  className: "DropdownContainer",
})``;

export const Children = styled.div.attrs({
  className: "Children",
})``;

export const DropdownWrapper = styled.div.attrs<{
  distanceToTop: number;
  dropdownWidth: number;
  dropdownDistToLeft: number;
  dropdownSettings: DropdownProps;
}>({
  className: "DropdownWrapper",
})`
  background-color: ${({ dropdownSettings }) =>
    dropdownSettings.backgroundColor && `${dropdownSettings.backgroundColor}`};
  position: fixed;
  top: ${({ distanceToTop }) => distanceToTop && `${distanceToTop - 1}px`};
  left: ${({ dropdownDistToLeft }) =>
    dropdownDistToLeft && `${dropdownDistToLeft}px`};
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: ${({ dropdownWidth, dropdownSettings }) =>
    dropdownSettings.width
      ? `${dropdownSettings.width}px`
      : `${dropdownWidth}px`};
  max-height: ${({ dropdownSettings }) =>
    dropdownSettings.maxHeight && `${dropdownSettings.width}px`};
  color: ${({ dropdownSettings }) =>
    dropdownSettings.fontColor && `${dropdownSettings.fontColor}`};
  font-size: ${({ dropdownSettings }) =>
    dropdownSettings.fontSize && `${dropdownSettings.fontSize}`};

  &:hover {
    background-color: ${({ dropdownSettings }) =>
      dropdownSettings.backgroundColor &&
      `${dropdownSettings.backgroundColorOnHover}`};
  }
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  width: 100%;
`;

export const Option = styled.div.attrs<{ dropdownSettings: DropdownProps }>({
  className: "Option",
})`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 50px;
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
