import styled from "styled-components";
import { Color } from "../../../components/colorCodes";
import { Button as ButtonBase } from "../../../components/Button/button";

export const IdPpContainer = styled.div.attrs({
  className: "IdPpContainer",
})`
  background-color: ${Color.white};
  width: 100%;
  min-height: 670px;
  color: ${Color.darkBlueFont};
`;

export const HeaderContainer = styled.div.attrs({
  className: "HeaderContainer",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 105px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const TopSubHeader = styled.div.attrs({
  className: "TopSubHeader",
})`
  display: flex;
  padding: 5px 25px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: ${Color.grayLighter};
`;

export const BottomSubHeader = styled.div.attrs({
  className: "BottomSubHeader",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 10px 0;
`;

export const Title = styled.div.attrs({
  className: "Title",
})`
  color: ${Color.darkBlueFont};
  font-size: 20px;
  font-weight: 500;
`;

export const AddItem = styled(ButtonBase).attrs<{ admin: boolean }>({
  className: "AddItem",
})`
  height: 80%;
  visibility: ${({ admin }) => (admin ? "none" : "hidden")};
`;

export const ExpandedItem = styled.div.attrs({
  className: "ExpandedItem",
})`
  height: 150px;
  width: 100%;
  border-top: 0;
  border-top: 1px solid lightgray;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
