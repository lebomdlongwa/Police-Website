import styled from "styled-components";
import { Color } from "../../colorCodes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease;
`;

const buttonSizeMixin = (size: string) => {
  switch (size) {
    case "small":
      return "padding: 7px 14px; font-size: 14px;";
    case "medium":
      return "padding: 10px 14px; font-size: 16px;";
    case "large":
      return "padding: 15px 20px; font-size: 18px;";
    default:
      return "padding: 10px 14px; font-size: 16px;";
  }
};

export const ButtonContent = styled.div.attrs<{
  buttonColor?: string;
  fontColor?: string;
  fontOnHover?: string;
  borderColor?: string;
  buttonColorOnHover?: string;
  size?: string;
}>({
  className: "ButtonContent",
})`
  ${({ size }) => buttonSizeMixin(size)};
  border-radius: 4px;
  color: ${({ fontColor }) => (fontColor ? `${fontColor}` : "white")};
  background-color: ${({ buttonColor }) =>
    buttonColor ? buttonColor : `${Color.navyBlueLighter}`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};

  &:hover {
    background-color: ${({ buttonColorOnHover }) =>
      buttonColorOnHover ? `${buttonColorOnHover}` : `${Color.blue}`};
    color: ${({ fontOnHover }) => (fontOnHover ? `${fontOnHover}` : "white")};
  }
`;
