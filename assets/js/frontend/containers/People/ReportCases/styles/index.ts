import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  background-color: ${Color.chalk};
`;

export const ReportCasesWrapper = styled.div.attrs({
  className: "ReportCasesWrapper",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
