import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const ReportPersonWrapper = styled.div.attrs({
  className: "ReportPersonWrapper",
})`
  width: 620px;
  height: 164px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: ${Color.lightBlue};
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 340px;
    height: 165px;
  }

  @media (max-width: 330px) {
    width: 260px;
    height: 210px;
  }
`;

export const ReportPersonHeader = styled.div.attrs({
  className: "ReportPersonHeader",
})`
  color: ${Color.darkBlueFont};
  font-size: 23px;
  font-weight: 700;

  // @media (max-width: 330px) {
  //   font-size: 20px;
  //   height: 28%;
  // }
`;

export const ReportPersonButton = styled.div.attrs({
  className: "ReportPersonButton",
})`
  background-color: ${Color.darkBlueFont};
  border-radius: 20px;
  padding: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color.lightBlue};
  font-weight: 700;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${Color.navyBlueLighter};
    transition: all 0.3s ease;
    color: ${Color.white};
    cursor: pointer;
  }

  // @media (max-width: 500px) {
  //   padding: 5px;
  // }
`;
