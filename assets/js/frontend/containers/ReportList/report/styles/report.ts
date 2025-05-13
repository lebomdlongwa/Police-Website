import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const ReportWrapper = styled.div.attrs<{ expand: boolean }>({
  className: "ReportWrapper",
})`
  width: 100%;
  height: ${({ expand }) => (expand ? "270px" : "75px")};
  padding: 5px 50px;
`;

export const ReportBody = styled.div.attrs({
  className: "ReporBody",
})`
  width: 100%;
  height: 100%;
`;

export const ReportItemWrapper = styled.div.attrs<{ expand: boolean }>({
  className: "ReportItemWrapper",
})`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: ${({ expand }) =>
    expand
      ? `2px solid ${Color.lightBlue}`
      : `1px solid ${Color.grayLighter} `};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ReportItem = styled.div.attrs({
  className: "ReportItem",
})`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const AvatarWrapper = styled.div.attrs({
  className: "AvatarWrapper",
})`
  height: 90%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  border-right: 1px solid ${Color.lightgray};
`;

export const ReportContent = styled.div.attrs({
  className: "ReportContent",
})`
  width: 75%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CaseNumber = styled.div.attrs({
  className: "CaseNumber",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Officer = styled.div.attrs({
  className: "Officer",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ReportGrade = styled.div.attrs({
  className: "ReportGrade",
})`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ReportDate = styled.div.attrs({
  className: "ReportDate",
})`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div.attrs<{ class?: string }>({
  className: "Icon",
})`
  height: 40%;
  display: flex;
  align-items: center;
`;

export const IconImage = styled.img.attrs({
  className: "IconImage",
})`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLabel = styled.div.attrs({
  className: "IconLabel",
})`
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  height: 60%;
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
