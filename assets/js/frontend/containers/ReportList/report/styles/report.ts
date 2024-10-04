import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const ReportWrapper = styled.div.attrs({
  className: "ReportWrapper",
})`
  width: 100%;
  height: 100%;
  padding: 5px 50px;
  margin-top: 10px;
`;

export const ReportBody = styled.div.attrs({
  className: "ReporBody",
})`
  width: 100%;
  height: 100%;
`;

export const ReportItemWrapper = styled.div.attrs({
  className: "ReportItemWrapper",
})`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${Color.grayLighter};
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: all 0.3s ease;
  }
`;

export const ReportItem = styled.div.attrs({
  className: "ReportItem",
})`
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;
`;

export const ReportContent = styled.div.attrs({
  className: "ReportContent",
})`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Informant = styled.div.attrs({
  className: "Informant",
})`
  width: 25%;
  height: 100%;
  padding-left: 20px;
`;

export const CaseNumber = styled.div.attrs({
  className: "CaseNumber",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Officer = styled.div.attrs({
  className: "Officer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportGrade = styled.div.attrs({
  className: "ReportGrade",
})`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportDate = styled.div.attrs({
  className: "ReportDate",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div.attrs<{ class?: string }>({
  className: "Icon",
})`
  height: 40%;
  display: flex;
  align-items: center;
`;

export const IconLabel = styled.div.attrs({
  className: "IconLabel",
})`
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  color: #989898;
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  height: 60%;
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-weight: 800;
`;

export const ButtonsWrapper = styled.div.attrs({
  className: "ButtonsWrapper",
})`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const ButtonDivider = styled.div.attrs({
  className: "ButtonDivider",
})`
  border-left: 1px solid ${Color.iconGray};
  height: 60%;
`;

export const Button = styled.div.attrs({
  className: "Button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 47px;
  height: 100%;
`;
