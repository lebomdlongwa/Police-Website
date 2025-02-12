import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 40px;
  border-bottom: 1px solid lightgray;

  &:hover {
    box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.1), 3px 3px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Sender = styled.div.attrs({
  className: "Sender",
})`
  width: 250px;
  height: 100%;
  padding-right: 10px;
  color: ${Color.black};
  font-size: 15px;
  line-height: 39px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BriefSummary = styled(Sender).attrs({
  className: "BriefSummary",
})`
  flex: 1;
  color: ${Color.lightBlack};
`;

export const TimeStamp = styled(Sender).attrs({
  className: "TimeStamp",
})`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  color: ${Color.lightBlack};
`;
