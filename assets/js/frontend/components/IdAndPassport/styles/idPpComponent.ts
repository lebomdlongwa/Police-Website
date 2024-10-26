import styled from "styled-components";
import { Color } from "../../colorCodes";

export const IdPpWrapper = styled.div.attrs({
  className: "IdPpWrapper",
})`
  padding: 10px 0;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div.attrs({
  className: "ItemContainer",
})`
  width: 85%;
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
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Item = styled.div.attrs<{ admin: boolean }>({
  className: "Item",
})`
  height: 100%;
  width: ${({ admin }) => (admin ? "87%" : "100%")};
  display: flex;
  align-items: center;
`;

export const ItemContent = styled.div.attrs({
  className: "ItemContent",
})`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export const FullName = styled.div.attrs({
  className: "FullName",
})`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.div.attrs({
  className: "Icon",
})`
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 60%;
  display: flex;
  align-items: center;
  color: ${Color.darkBlueFont};
  font-weight: 800;
`;

export const IdNumber = styled.div.attrs({
  className: "IdNumber",
})`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Content} {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const DateLost = styled.div.attrs({
  className: "DateLost",
})`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ExpandedItem = styled.div.attrs({
  className: "ExpandedItem",
})`
  height: 130px;
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
  width: 13%;
  height: 100%;
  display: flex;
  align-items: center;
  /* margin-left: 40px; */
  color: gray;
`;

export const ButtonDivider = styled.div.attrs({
  className: "ButtonDivider",
})`
  border-left: 1px solid #989898;
  height: 60%;
`;

export const Button = styled.div.attrs({
  className: "Button",
})`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 47px;
  height: 100%;
  padding: 15px;
`;

export const ButtonIcon = styled.div.attrs({
  className: "ButtonIcon",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;
