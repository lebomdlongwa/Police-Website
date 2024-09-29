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
  height: 16vh;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
  padding: 5px 0;
`;

export const Title = styled.div.attrs({
  className: "Title",
})`
  height: 3vh;
  color: ${Color.darkBlueFont};
  font-size: 20px;
  font-weight: 500;
`;

export const AddItem = styled(ButtonBase).attrs({
  className: "AddItem",
})`
  height: 80%;
`;

export const SearchBox = styled.div.attrs({
  className: "SearchBox",
})`
  border: 1px solid lightgray;
  height: 90%;
  width: 40%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const SearchIcon = styled.div.attrs({
  className: "SearchIcon",
})`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 5px;
`;

export const SearchInput = styled.input.attrs({
  className: "SearchInput",
})`
  text-decoration: none;
  color: ${Color.darkBlueFont};
  font-size: 18px;
  font-weight: 400;
  padding: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ListTitle = styled.div.attrs({
  className: "ListTitle",
})`
  width: 100%;
  height: 100%;
`;
