import styled from "styled-components";
import { Color } from "../../colorCodes";

export const NoDataWrapper = styled.div.attrs({
  className: "NoDataWrapper",
})`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px;
`;

export const NoDataTitle = styled.div.attrs({
  className: "NoDataTitle",
})`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

export const NoDataLabel = styled.div.attrs({
  className: "NoDataLabel",
})`
  color: ${Color.gray};
  font-size: 25px;
  fornt-weight: 600;
`;
