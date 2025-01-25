import styled from "styled-components";
import { Color } from "../../../../../components/colorCodes";

export const DropdownWrapper = styled.div.attrs({
  className: "DropdownWrapper",
})`
  width: 100%;
  height: 305px;
  padding: 6px 15px;
`;

export const NameAndClothes = styled.div.attrs({
  className: "NameAndClothes",
})`
  width: 100%;
  height: 104px;
  border-top: 1px solid ${Color.lightgray};
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownLabel = styled.div.attrs({
  className: "DropdownLabel",
})`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${Color.gray};
`;

export const DropdownContent = styled.div.attrs({
  className: "DropdownContent",
})`
  padding-top: 10px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: 800;
  color: ${Color.lightBlack};
`;

export const ClothesWrapper = styled.div.attrs({
  className: "ClothesWrapper",
})`
  width: 45%;
  height: 100%;
`;

export const NameWrapper = styled.div.attrs({
  className: "NameWrapper",
})`
  width: 45%;
  height: 100%;
`;

export const BriefSummary = styled.div.attrs({
  className: "BriefSummary",
})`
  border-top: 1px solid ${Color.lightgray};
  margin-top: 20px;
  padding-top: 10px;
  width: 100%;
  height: 150px;
`;

export const CaseFooter = styled.div.attrs({
  className: "CaseFooter",
})`
  width: 100%;
  height: 22px;
  background-color: ${Color.grayLighter};
  position: absolute;
  bottom: 0;
  left: 0;
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
