import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const NavWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const NavMenu = styled.div.attrs({
  className: "NavMenu",
})`
  height: 60px;
  margin-bottom: 30px;
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const NavOptions = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
`;

export const StyledLink = styled(Link).attrs({
  className: "StyledLink",
})`
  text-decoration: none;
  width: 100%;
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: ${Color.blue};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const OptionIcon = styled.div`
  padding: 10px 18px;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpandedMenuOption = styled.div.attrs<{ expandMenu: boolean }>({
  className: "ExpandedMenuOption",
})`
  padding-left: 10px;
  height: 100%;
  color: "white";
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ expandMenu }) => (expandMenu ? "visible" : "hidden")};
  font-size: 13px;
  font-weight: 400;
`;
