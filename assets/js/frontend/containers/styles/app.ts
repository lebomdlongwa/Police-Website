import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../components/colorCodes";

export const AppContainer = styled.div.attrs({
  className: "AppContainer",
})`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const AppSideBar = styled.div.attrs({
  className: "AppSideBar",
})`
  height: 100vh;
  width: 60px;
  background-color: ${Color.black};
  position: fixed;

  /* For mobile dev sake */
  /* background-color: #333; */
  /* 
  @media (max-width: 400px) {
    max-height: 7vh;
  } */
`;

export const AppBody = styled.div.attrs({
  className: "AppBody",
})`
  width: calc(100vw - 60px);
  overflow: auto;
  margin-left: 60px;
`;

export const StyledLink = styled(Link).attrs({
  className: "StyledLink",
})`
  text-decoration: none;
`;
