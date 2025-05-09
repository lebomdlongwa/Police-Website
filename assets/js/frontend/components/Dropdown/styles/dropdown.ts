import styled from "styled-components";
import { DropdownProps } from "../dropdown";
import { Color } from "../../colorCodes";
import { HideScrollBarMixin } from "../../../appStyles";

export const DropdownContainer = styled.div.attrs({
  className: "DropdownContainer",
})``;

export const Children = styled.div.attrs<{ borderTop: boolean }>({
  className: "Children",
})`
  & > :first-child {
    border-bottom-left-radius: ${({ borderTop }) => !borderTop && "0"};
    border-bottom-right-radius: ${({ borderTop }) => !borderTop && "0"};
  }
`;

export const DropdownWrapper = styled.div.attrs<{
  distanceToTop: number;
  dropdownWidth: number;
  dropdownDistToLeft: number;
  dropdownSettings: Partial<DropdownProps>;
}>({
  className: "DropdownWrapper",
})`
  display: ${({ dropdownSettings }) =>
    dropdownSettings.displayDropdown ? "flex" : "none"};
  background-color: ${({ dropdownSettings }) =>
    dropdownSettings.backgroundColor && `${dropdownSettings.backgroundColor}`};
  position: fixed;
  top: ${({ distanceToTop }) => distanceToTop && `${distanceToTop}px`};
  left: ${({ dropdownDistToLeft }) =>
    dropdownDistToLeft && `${dropdownDistToLeft}px`};
  border: 1px solid ${Color.lightgray};
  border-radius: ${({ dropdownSettings }) =>
    dropdownSettings.isSearch ? "none" : "5px"};
  border-top: ${({ dropdownSettings }) =>
    !dropdownSettings.borderTop && "none"};
  border-top-left-radius: ${({ dropdownSettings }) =>
    !dropdownSettings.borderTop && "0"};
  border-top-right-radius: ${({ dropdownSettings }) =>
    !dropdownSettings.borderTop && "0"};

  width: ${({ dropdownWidth, dropdownSettings }) =>
    dropdownSettings.width
      ? `${dropdownSettings.width}px`
      : `${dropdownWidth}px`};
  max-height: ${({ dropdownSettings }) =>
    dropdownSettings.maxHeight ? `${dropdownSettings.width}px` : "400px"};
  color: ${({ dropdownSettings }) =>
    dropdownSettings.fontColor && `${dropdownSettings.fontColor}`};
  font-size: ${({ dropdownSettings }) =>
    dropdownSettings.fontSize && `${dropdownSettings.fontSize}`};

  ${HideScrollBarMixin}
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
  dropdownSettings: Partial<DropdownProps>;
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

export const Option = styled.div.attrs<{
  dropdownSettings: Partial<DropdownProps>;
}>({
  className: "Option",
})`
  height: 100%;
  margin: auto;
  width: 90%;
  display: flex;
  align-items: center;
  color: ${({ dropdownSettings }) => dropdownSettings.fontColor};
  font-size: ${({ dropdownSettings }) => `${dropdownSettings.fontSize}px`};
  border-bottom: 1px solid ${Color.grayLighter};
`;
