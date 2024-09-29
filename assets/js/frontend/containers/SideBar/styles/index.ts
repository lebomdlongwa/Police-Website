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
  box-shadow: 0 20px 20px rgba(0, 0, 0, 1);
`;
