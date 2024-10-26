import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  /* border-top: 1px solid ${Color.lightgray}; */
`;

export const SortByWrapper = styled.div.attrs({
  className: "SortByWrapper",
})`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const SortByLabel = styled.div.attrs({
  className: "SortByLabel",
})`
  height: 100%;
  width: 100px;
  color: ${Color.darkBlueFont};
  font-weight: 800;
  font-size: 19px;
  display: flex;
  align-items: center;
`;

export const OptionsWrapper = styled.div.attrs({
  className: "OptionsWrapper",
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Options = styled.div.attrs<{ active: boolean }>({
  className: "Options",
})`
  height: 40px;
  border: ${({ active }) =>
    active ? `${Color.darkBlue}` : `1px solid ${Color.lightgray}`};
  border-radius: 25px;
  background-color: ${({ active }) => (active ? `${Color.darkBlue}` : "white")};
  padding: 10px 15px;
  padding-right: ${({ active }) => (active ? "7px" : "15px")};
  color: ${({ active }) => (active ? "white" : `${Color.darkBlueFont}`)};
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const XIcon = styled.div.attrs<{ active: boolean }>({
  className: "XIcon",
})`
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ active }) => (active ? "flex" : "none")};
`;

export const SearchBox = styled.div.attrs({
  className: "SearchBox",
})`
  border: 1px solid lightgray;
  height: 80%;
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
