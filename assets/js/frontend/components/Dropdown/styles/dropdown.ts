import styled, { css } from "styled-components";
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
  border-radius: 5px;
  position: fixed;
  border: 1px solid ${Color.lightgray};

  ${({
    dropdownSettings,
    distanceToTop,
    dropdownWidth,
    dropdownDistToLeft,
  }) => {
    return css`
      display: ${dropdownSettings.displayDropdown ? "flex" : "none"};

      box-shadow: ${dropdownSettings.isSearch || dropdownSettings.noGap
        ? "0 4px 6px -4px rgba(0, 0, 0, 0.3)"
        : "0 2px 5px rgba(0, 0, 0, 0.3)"};

      background-color: ${dropdownSettings.backgroundColor};

      top: ${dropdownSettings.isSearch || dropdownSettings.noGap
        ? distanceToTop
        : distanceToTop + 7}px;

      left: ${dropdownDistToLeft}px;

      border-top: ${!dropdownSettings.borderTop && "none"};

      border-top-left-radius: ${dropdownSettings.isSearch && "0"};

      border-top-right-radius: ${dropdownSettings.isSearch && "0"};

      width: ${dropdownSettings.width
        ? `${dropdownSettings.width}px`
        : `${dropdownWidth}px`};

      max-height: ${dropdownSettings.maxHeight
        ? `${dropdownSettings.width}px`
        : "400px"};

      color: ${dropdownSettings.fontColor && `${dropdownSettings.fontColor}`};

      font-size: ${dropdownSettings.fontSize && `${dropdownSettings.fontSize}`};
    `;
  }};

  z-index: 10000;

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
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: ${({ dropdownSettings }) => dropdownSettings.fontColor};
  font-size: ${({ dropdownSettings }) => `${dropdownSettings.fontSize}px`};
  border-bottom: 1px solid ${Color.grayLighter};
`;
