import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const ExpandedItemWrapper = styled.div.attrs({
  className: "ExpandedItemWrapper",
})`
  /* min-height: 100px; */
  /* max-height: 30vh; */
  height: 50vh;
  width: 100%;
  border-top: 1px solid lightgray;
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
  /* height: 60%; */
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-weight: 800;
`;

export const TopItemWrapper = styled.div.attrs({
  className: "TopItemWrapper",
})`
  max-height: 60%;
  padding-top: 5px;
  width: 97%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const BriefCircumstance = styled.div.attrs({
  className: "BriefCircumstance",
})`
  width: 100%;
  padding: 0px 20px 5px 0;
`;

export const BriefCircumstanceHeader = styled.div.attrs({
  className: "BriefCircumstanceHeader",
})`
  margin-top: 10px;
  width: 100%;
  color: ${Color.darkBlueFont};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

export const BriefCircumstanceContent = styled.div.attrs({
  className: "BriefCircumstanceContent",
})`
  width: 100%;
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-top: 10px;
  overflow-x: hidden;
`;

export const BottomItemWrapper = styled.div.attrs({
  className: "BottomItemWrapper",
})`
  padding-top: 5px;
  height: 40%;
  width: 97%;
  border-top: 0;
  color: ${Color.darkBlueFont};
  display: flex;
`;

export const SceneAttendance = styled.div.attrs({
  className: "SceneAttendance",
})`
  height: 100%;
  width: 25%;
  color: ${Color.darkBlueFont};
  display: flex;
`;

export const ActionTaken = styled.div.attrs({
  className: "ActionTaken",
})`
  height: 100%;
  width: 25%;
  color: ${Color.darkBlueFont};
  display: flex;
`;

export const Accussed = styled.div.attrs({
  className: "Accussed",
})`
  height: 100%;
  width: 25%;
  color: ${Color.darkBlueFont};
  display: flex;
  flex-direction: column;
`;
