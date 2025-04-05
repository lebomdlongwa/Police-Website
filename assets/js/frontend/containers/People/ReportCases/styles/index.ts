import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${Color.chalk};
`;

export const ReportCasesWrapper = styled.div.attrs<{ center: boolean }>({
  className: "ReportCasesWrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-between;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
`;
