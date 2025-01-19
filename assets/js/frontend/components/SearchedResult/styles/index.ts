import styled from "styled-components";
import { Color } from "../../colorCodes";

export const SearchedResultWrapper = styled.div.attrs({
  className: "SearchedResultWrapper",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div.attrs({
  className: "IconWrapper",
})`
  &:hover {
    cursor: pointer;
  }
`;

export const BackButton = styled.div.attrs({
  className: "BackButton",
})`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const BackButtonText = styled.div.attrs({
  className: "BackButtonText",
})`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  color: ${Color.darkBlueFont};
  font-size: 20px;
  display: flex;
  align-items: center;
`;
