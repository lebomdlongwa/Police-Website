import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const ExpandedItemWrapper = styled.div.attrs({
  className: "ExpandedItemWrapper",
})`
  /* min-height: 100px; */
  /* max-height: 30vh; */
  width: 100%;
  height: 100%;
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
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const Content = styled.div.attrs<{ isSolvedField: boolean }>({
  className: "Content",
})`
  padding-top: ${({ isSolvedField }) => (isSolvedField ? "2px" : "5px")};
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-weight: 800;
`;

export const TopItemWrapper = styled.div.attrs({
  className: "TopItemWrapper",
})`
  height: 70%;
  width: 97%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const TopItems = styled.div.attrs({
  className: "TopItems",
})`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

export const TopItemsDivider = styled.div.attrs({
  className: "TopItemsDivider",
})`
  width: 1px;
  height: 80%;
  border-left: 1px solid ${Color.lightgray};
  padding: 0 10px;
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
  font-weight: 800;
  font-size: 15px;
  gap: 30px;
`;

export const AskAiButton = styled.div.attrs({
  className: "AskAiButton",
})`
  // width: 50px;
  // height: 50px;
`;

export const SummarizedBrief = styled.div.attrs<{
  left: number;
  top: number;
}>({
  className: "SummarizedBrief",
})`
  max-width: 400px;
  min-width: 300px;
  max-height: 350px;
  border-radius: 10px;
  border: 1px solid ${Color.lightgray};
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  background-color: white;
`;

export const AskGeminiHeader = styled.div.attrs({
  className: "AskGeminiHeader",
})`
  width: 100%;
  height: 46px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Color.lightgray};
  color: ${Color.black};
  font-weight: 900;
  position: relative;
`;

export const CloseAiModal = styled.div.attrs({
  className: "CloseAiModal",
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AskGeminiBody = styled.div.attrs({
  className: "AskGeminiBody",
})`
  width: 100%;
  padding: 20px;
  color: ${Color.black};
  font-weight: 600;
  background-color: ${Color.chalk};
`;

export const Summary = styled.p`
  font-weight: 600;
  color: ${Color.black};
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem; /* equivalent to pl-5 */
  color: ${Color.black};
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${Color.black};
  font-weight: 600;
`;

export const BriefCircumstanceContent = styled.div.attrs({
  className: "BriefCircumstanceContent",
})`
  width: 100%;
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 10px;
  overflow-x: hidden;
  padding: 0 2px;
`;

export const BottomItemWrapper = styled.div.attrs({
  className: "BottomItemWrapper",
})`
  padding-top: 5px;
  height: 30%;
  width: 97%;
  border-top: 0;
  color: ${Color.darkBlueFont};
  display: flex;
  justify-content: space-between;
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
  align-items: center;
`;
