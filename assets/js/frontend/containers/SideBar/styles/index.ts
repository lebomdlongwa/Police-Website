import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const SideBarWrapper = styled.div.attrs({
  className: "SideBarWrapper",
})`
  position: fixed;
  left: 0;
  width: 65%;
  height: 100%;
  background-color: #333;
  border-top: 1px solid lightgray;
`;
