import styled from "styled-components";
import { Color } from "../../../components/colorCodes";
import { Button as ButtonBase } from "../../../components/Button/button";

export const ListWrapper = styled.div.attrs({
  className: "ListWrapper",
})`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const ListHeader = styled.div.attrs({
  className: "ListHeader",
})`
  width: 100%;
  min-height: 10vh;
`;

export const HeaderContainer = styled.div.attrs({
  className: "HeaderContainer",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

export const SortByHeader = styled.div.attrs({
  className: "SortByHeader",
})`
  height: 100%;
  width: 100%;
`;

export const SubHeader = styled.div.attrs({
  className: "SubHeader",
})`
  height: 18vh;
  width: 100%;
`;

export const TopSubHeader = styled.div.attrs({
  className: "TopSubHeader",
})`
  display: flex;
  padding: 5px 25px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45%;
  background-color: ${Color.grayLighter};
`;

export const BottomSubHeader = styled.div.attrs({
  className: "BottomSubHeader",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
`;

export const Title = styled.div.attrs({
  className: "Title",
})`
  height: 3vh;
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-size: 23px;
  font-weight: 500;
`;

export const AddItem = styled(ButtonBase).attrs({
  className: "AddItem",
})`
  height: 80%;
`;

export const ListTitle = styled.div.attrs({
  className: "ListTitle",
})`
  width: 100%;
  height: 100%;
`;
