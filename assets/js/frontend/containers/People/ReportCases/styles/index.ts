import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Color.chalk};
`;

export const ReportCasesWrapper = styled.div.attrs<{
  isLoading: boolean;
  noData: boolean;
}>({
  className: "ReportCasesWrapper",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ noData }) => (noData ? "height: 100vh" : "padding: 30px")};

  ${({ isLoading }) =>
    isLoading ? "align-items: center; flex: 1" : "flex-start"};
`;
