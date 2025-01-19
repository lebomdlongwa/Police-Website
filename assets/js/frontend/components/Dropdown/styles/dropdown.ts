import styled from "styled-components";
import { DropdownProps } from "../dropdown";
import { Color } from "../../colorCodes";

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
  display: ${({ dropdownSettings }) =>
    dropdownSettings.displayDropdown ? "flex" : "none"};
  background-color: ${({ dropdownSettings }) =>
    dropdownSettings.backgroundColor && `${dropdownSettings.backgroundColor}`};
  position: fixed;
  top: ${({ distanceToTop }) => distanceToTop && `${distanceToTop - 1}px`};
  left: ${({ dropdownDistToLeft }) =>
    dropdownDistToLeft && `${dropdownDistToLeft}px`};
  border: 1px solid ${Color.lightgray};
  border-radius: ${({ dropdownSettings }) =>
    dropdownSettings.isSearch ? "none" : "5px"};
  box-shadow: ${({ dropdownSettings }) =>
    dropdownSettings.isSearch ? "none" : "0 0 10px rgba(0, 0, 0, 0.3)"};
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
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  width: 100%;

  & > :last-child {
    & > :first-child {
      border-bottom: none;
    }
  }
`;

export const OptionContainer = styled.div.attrs<{
  dropdownSettings: DropdownProps;
}>({
  className: "OptionContainer",
})`
  height: 50px;
  width: 100%;

  &:hover {
    background-color: ${({ dropdownSettings }) =>
      dropdownSettings.backgroundColorOnHover};
    transition: 200ms ease;
    cursor: pointer;
    color: ${({ dropdownSettings }) => dropdownSettings.fontColorOnHover};
  }
`;

export const Option = styled.div.attrs<{ dropdownSettings: DropdownProps }>({
  className: "Option",
})`
  height: 100%;
  margin: auto;
  width: 95%;
  display: flex;
  align-items: center;
  color: ${({ dropdownSettings }) => dropdownSettings.fontColor};
  border-bottom: 1px solid ${Color.grayLighter};
`;
