import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const ReportItemWrapper = styled.div.attrs({
  className: "ReportItem",
})`
  margin-bottom: 30px;

  &:hover {
    transition: 0.3 ease-in;
    cursor: pointer;
  }
`;

export const CaseBody = styled.div.attrs<{ expanded: boolean }>({
  className: "CaseBody",
})`
  width: 42vw;
  height: 66px;
  padding: 10px 15px;
  border: 1px solid ${Color.lightgray};
  border-bottom: ${({ expanded }) => expanded && "none"};
  border-radius: 5px;
  display: flex;
  background-color: ${Color.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const CaseFooter = styled.div.attrs({
  className: "CaseFooter",
})`
  width: 42vw;
  height: 22px;
  background-color: ${Color.grayLighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const CaseFooterContent = styled.div.attrs({
  className: "CaseFooterContent",
})`
  color: ${Color.lightBlack};
  font-weight: 600px;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
`;

export const LabelContentWrapper = styled.div.attrs({
  className: "LabelContentWrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.div.attrs({
  className: "Label",
})`
  font-size: 14px;
  font-weight: 700;
  color: ${Color.gray};
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  font-size: 18px;
  font-weight: 800;
  color: ${Color.lightBlack};
`;

export const DateLastSeen = styled.div.attrs({
  className: "DateLastSeen",
})`
  width: 40%;
  height: 100%;
`;

export const Location = styled(DateLastSeen).attrs({
  className: "Location",
})``;

export const ExapandButtonWrapper = styled.div.attrs({
  className: "ExapandButtonWrapper",
})`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ExapandArrow = styled.div.attrs({
  className: "ExapandArrow",
})`
  width: 30px;
  height: 30px;
  border: 2px solid ${Color.lightBlack};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
