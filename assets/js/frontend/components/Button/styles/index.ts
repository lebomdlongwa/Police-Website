import styled from "styled-components";
import { Color } from "../../colorCodes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease;
`;

export const ButtonContent = styled.div.attrs<{
  buttonColor?: string;
  fontColor?: string;
  fontOnHover?: string;
  borderColor?: string;
}>({
  className: "ButtonContent",
})`
  padding: 10px 14px;
  border-radius: 4px;
  color: ${({ fontColor }) => (fontColor ? `${fontColor}` : "white")};
  background-color: ${({ buttonColor }) =>
    buttonColor ? buttonColor : `${Color.navyBlueLighter}`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};

  &:hover {
    background-color: ${Color.blue};
    color: ${({ fontOnHover }) => (fontOnHover ? `${fontOnHover}` : "white")};
  }
`;
