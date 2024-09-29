import styled from "styled-components";
import { Color } from "../../components/colorCodes";

export const AppContainer = styled.div.attrs({
  className: "AppContainer",
})`
  background-color: ${Color.darkBlue};
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* position: relative; */
  display: flex;
`;

export const AppSideBar = styled.div.attrs({
  className: "AppSideBar",
})`
  width: 63px;
  height: 100vh;

  /* For mobile dev sake */
  /* background-color: #333; */

  @media (max-width: 400px) {
    max-height: 7vh;
  }
`;

export const AppNavBar = styled.div.attrs({
  className: "AppNavBar",
})`
  height: 53px;
  width: 100%;

  /* For mobile dev sake */
  /* background-color: #333; */

  @media (max-width: 400px) {
    max-height: 7vh;
  }
`;

export const AppBody = styled.div.attrs({
  className: "AppBody",
})`
  background-color: ${Color.darkBlue};
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;
