import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const NavWrapper = styled.div`
  /* position: sticky;
  position: -webkit-sticky;
  z-index: 1000;
  top: 0;
  height: 53px;
  width: 100%;

  /* For mobile dev sake */
  /* background-color: #333; */

  /* @media (max-width: 400px) {
    max-height: 7vh;
  }  */
  height: 53px;
  width: 100%;
`;

export const NavOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #0c213a;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.7);
`;

export const StyledLink = styled(Link).attrs({
  className: "StyledLink",
})`
  text-decoration: none;
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})``;

export const Option = styled.div`
  border-left: 1px solid #3d3d3d;
  padding: 19px 23px;
  height: 100%;
  color: #c1c1c1;
  text-decoration: none;

  &:hover {
    background-color: #0f4d96;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
