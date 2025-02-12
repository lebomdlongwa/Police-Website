import styled from "styled-components";
import { Color } from "../../colorCodes";
import { AvatarComponent } from "../../Avatar/avatar";

export const SearchWrapper = styled.div.attrs<{
  searchResultsPresent: boolean;
  height?: number;
  width?: number;
  background?: string;
  border: boolean;
  borderRadius: number;
}>({
  className: "SearchWrapper",
})`
  border: ${({ border }) => (border ? "1px solid lightgray" : "none")};
  background-color: ${({ background }) =>
    background ? `${background}` : `${Color.white}`};
  width: ${({ width }) => (width ? `${width}px` : "450px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "20px"};
  border-bottom-left-radius: ${({ searchResultsPresent }) =>
    searchResultsPresent && 0};
  border-bottom-right-radius: ${({ searchResultsPresent }) =>
    searchResultsPresent && 0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
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
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 5px;
`;

export const SearchInput = styled.input.attrs<{
  iconColor: string;
  fontSize: number;
}>({
  className: "SearchInput",
})`
  background: none;
  text-decoration: none;
  width: 85%;
  color: ${Color.darkBlueFont};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  font-weight: 400;
  padding: 5px;
  border: none;

  &::placeholder {
    color: ${({ iconColor }) => iconColor && `${iconColor}`};
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownOption = styled.div.attrs({
  className: "DropdownOption",
})`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OptionNameAvatar = styled(AvatarComponent).attrs({
  className: "OptionNameAvatar",
})`
  height: 30px;
  width: 100%;
  font-size: 10px;
  display: flex;
  align-items: center;
`;

export const OptionName = styled.div.attrs({
  className: "OptionName",
})`
  height: 100%;
  width: calc(100% - 50px);
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
`;
