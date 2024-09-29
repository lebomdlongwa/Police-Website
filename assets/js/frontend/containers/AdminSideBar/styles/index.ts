import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const SideBarWrapper = styled.div.attrs({
  className: "SideBarWrapper",
})`
  width: 100%;
  height: 100%;
  background-color: ${Color.navyBlue};
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  width: 100%;
  height: 40%;
`;

export const Options = styled.div.attrs({
  className: "Options",
})`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid white;
`;
