import styled from "styled-components";
import { Color } from "../../colorCodes";
import { AvatarComponent } from "../../Avatar/avatar";

export const SearchWrapper = styled.div.attrs<{
  searchResultsPresent: boolean;
}>({
  className: "SearchWrapper",
})`
  border: 1px solid lightgray;
  width: 40%;
  height: 90%;
  border-radius: 20px;
  border-bottom-left-radius: ${({ searchResultsPresent }) =>
    searchResultsPresent && 0};
  border-bottom-right-radius: ${({ searchResultsPresent }) =>
    searchResultsPresent && 0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  /* position: relative; */
`;

export const SearchBox = styled.div.attrs({
  className: "SearchBox",
})`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div.attrs({
  className: "InputWrapper",
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
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

export const DropdownWrapper = styled.div.attrs<{
  distanceToTop: number;
  searchbarWidth: number;
  searchBarLeft: number;
}>({
  className: "DropdownWrapper",
})`
  max-height: 300px;
  width: ${({ searchbarWidth }) => searchbarWidth && `${searchbarWidth}px`};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  background-color: white;
  border: 1px solid lightgray;
  border-top: 0;
  position: fixed;
  top: ${({ distanceToTop }) => distanceToTop && `${distanceToTop}px`};
  left: ${({ searchBarLeft }) => searchBarLeft && `${searchBarLeft}px`};
  /* top: 145px; */
`;

export const DropdownOption = styled.div.attrs({
  className: "DropdownOption",
})`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;

  &:first-child {
    border-top: 1px solid lightgray;
  }

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: ${Color.lightBlue};
    cursor: pointer;
    transition: 0.3s ease;
  }
`;

export const OptionNameAvatar = styled(AvatarComponent).attrs({
  className: "OptionNameAvatar",
})`
  height: 30px;
  width: 30px;
  font-size: 10px;
  display: flex;
  align-items: center;
`;

export const OptionName = styled.div.attrs({
  className: "OptionName",
})`
  height: 100%;
  width: 100%;
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
`;
