import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const ReportPersonWrapper = styled.div.attrs({
  className: "ReportPersonWrapper",
})`
  width: 590px;
  height: 164px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

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
  background-color: ${Color.navyBlueLighter};
  height: 32%;
  width: 100%;
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 330px) {
    font-size: 20px;
    height: 28%;
  }
`;

export const ReportPersonBody = styled.div.attrs({
  className: "ReportPersonBody",
})`
  background-color: ${Color.blue};
  height: 68%;
  width: 100%;
  padding: 20px;
  flex-grow: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 330px) {
    height: 72%;
  }
`;

export const ReportPersonButton = styled.div.attrs({
  className: "ReportPersonButton",
})`
  color: ${Color.darkBlueFont};
  background-color: ${Color.lightBlue};
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${Color.navyBlueLighter};
    transition: all 0.3s ease;
    color: ${Color.white};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;
