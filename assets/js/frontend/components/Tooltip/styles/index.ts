import styled from "styled-components";
import { Color } from "../../colorCodes";
import { TooltipProps } from "..";

export const TooltipContainer = styled.div.attrs({
  className: "TooltipContainer",
})``;

export const Children = styled.div.attrs({
  className: "Children",
})``;

export const Triangle = styled.div.attrs({
  className: "Triangle",
})`
  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid blue;
    border-bottom: 50px solid transparent;
  }
`;

export const TooltipWrapper = styled.div.attrs<{
  tooltipWidth: number;
  tooltipDistToLeft: number;
  tooltipSettings: TooltipProps;
  displayTooltip: boolean;
  left: number;
  top: number;
}>({
  className: "tooltipWrapper",
})`
  // display: ${({ displayTooltip }) => (displayTooltip ? "flex" : "none")};
  display: none;
  z-index: 10000000;
  min-height: 30px;
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${({ tooltipSettings }) =>
    tooltipSettings.backgroundColor && `${tooltipSettings.backgroundColor}`};
  position: fixed;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ left }) => left && `${left}px`};
  width: ${({ tooltipWidth }) => tooltipWidth && `${tooltipWidth}px`};
  max-height: ${({ tooltipSettings }) =>
    tooltipSettings.maxHeight && `${tooltipSettings.width}px`};
  color: ${Color.lightBlack};
  font-size: ${({ tooltipSettings }) =>
    tooltipSettings.fontSize ? `${tooltipSettings.fontSize}` : "14px"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

// export const TooltipWrapper = styled.div.attrs<{
//   distanceToTop: number;
//   tooltipWidth: number;
//   tooltipDistToLeft: number;
//   tooltipSettings: TooltipProps;
// }>({
//   className: "tooltipWrapper",
// })`
//   min-height: 30px;
//   border-radius: 10px;
//   padding: 10px;
//   background-color: ${({ tooltipSettings }) =>
//     tooltipSettings.backgroundColor && `${tooltipSettings.backgroundColor}`};
//   position: fixed;
//   top: ${({ distanceToTop }) => distanceToTop && `${distanceToTop}px`};
//   left: ${({ tooltipDistToLeft }) =>
//     tooltipDistToLeft && `${tooltipDistToLeft}px`};
//   width: ${({ tooltipWidth, tooltipSettings }) =>
//     tooltipSettings.width ? `${tooltipSettings.width}px` : `${tooltipWidth}px`};
//   max-height: ${({ tooltipSettings }) =>
//     tooltipSettings.maxHeight && `${tooltipSettings.width}px`};
//   color: ${({ tooltipSettings }) =>
//     tooltipSettings.fontColor
//       ? `${tooltipSettings.fontColor}`
//       : `${Color.black}`};
//   font-size: ${({ tooltipSettings }) =>
//     tooltipSettings.fontSize ? `${tooltipSettings.fontSize}` : "14px"};
// `;

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
  tooltipSettings: TooltipProps;
}>({
  className: "OptionContainer",
})`
  height: 50px;
  width: 100%;

  &:hover {
    background-color: ${({ tooltipSettings }) =>
      tooltipSettings.backgroundColorOnHover};
    transition: 200ms ease;
    cursor: pointer;
    color: ${({ tooltipSettings }) => tooltipSettings.fontColorOnHover};
  }
`;

export const Option = styled.div.attrs<{ tooltipSettings: TooltipProps }>({
  className: "Option",
})`
  height: 100%;
  margin: auto;
  width: 95%;
  display: flex;
  align-items: center;
  color: ${({ tooltipSettings }) => tooltipSettings.fontColor};
  border-bottom: 1px solid ${Color.grayLighter};
`;
