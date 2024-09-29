import styled from "styled-components";
import { Color } from "../../colorCodes";

export const IdPpContainer = styled.div.attrs({
  className: "IdPpContainer",
})`
  background-color: ${Color.white};
  width: 100%;
  height: 100%;
  color: ${Color.darkBlueFont};
  padding: 20px 100px;
`;

export const HeaderContainer = styled.div.attrs({
  className: "HeaderContainer",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

export const Title = styled.div.attrs({
  className: "Title",
})`
  height: 6vh;
  color: ${Color.darkBlueFont};
  font-size: 30px;
`;

export const SearchBox = styled.div.attrs({
  className: "SearchBox",
})`
  border: 1px solid lightgray;
  height: 90%;
  width: 30%;
`;

export const SearchButton = styled.div.attrs({
  className: "SearchButton",
})``;

export const SearchIcon = styled.div.attrs({
  className: "SearchIcon",
})``;

export const SearchInput = styled.div.attrs({
  className: "SearchInput",
})``;

export const IdPpWrapper = styled.div.attrs({
  className: "IdPpWrapper",
})`
  margin-top: 30px;
  padding: 10px 0;
  /* border: 1px solid blue; */
  flex-grow: 1;
  height: 100%;
  width: 100%;
`;

export const ItemContainer = styled.div.attrs({
  className: "ItemContainer",
})`
  width: 100%;
  flex-grow: 1;
  border: 1px solid lightgray;
  margin-top: 13px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
`;

export const ItemWrapper = styled.div.attrs({
  className: "ItemWrapper",
})`
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Item = styled.div.attrs({
  className: "Item",
})`
  height: 100%;
  width: 100%;
`;

export const ItemContent = styled.div.attrs({
  className: "ItemContent",
})`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagName = styled.div.attrs({
  className: "TagName",
})`
  height: 100%;
  width: 30%;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  display: flex;
  align-items: center;
`;

export const ItemLost = styled.div.attrs({
  className: " ItemLost",
})`
  height: 100%;
  width: 30%;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateLost = styled.div.attrs({
  className: "DateLost",
})`
  height: 100%;
  width: 30%;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ExpandedItem = styled.div.attrs({
  className: "ExpandedItem",
})`
  height: 12vh;
  width: 100%;
  border-top: 0;
  border-top: 1px solid lightgray;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const ButtonsWrapper = styled.div.attrs({
  className: "ButtonsWrapper",
})`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 40px;
  color: gray;
`;

export const Button = styled.div.attrs({
  className: "RemoveButton",
})`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  &:hover {
    background-color: ${Color.lightBlue};
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${Color.white};
  }
`;
