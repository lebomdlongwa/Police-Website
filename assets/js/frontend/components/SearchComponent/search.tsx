import React, { useState, useRef } from "react";
import * as styled from "./styles";
import { AvatarColors, Color } from "../colorCodes";
import { SearchIcon } from "../icons/search";
import { Dropdown } from "../Dropdown/dropdown";
import OnClickOutside from "../OnClickOutside";
import { isEmpty } from "lodash";

type SearchComponentProps = {
  itemList: any[];
  handleDisplaySearchedItem: (id: string) => void;
  searchValue: string;
  height?: number;
  width?: number;
  background?: string;
  border?: boolean;
  borderRadius?: number;
  iconColor?: string;
  fontSize?: number;
  onClick?: VoidCallBack;
};

export const SearchComponent = (props: SearchComponentProps) => {
  const {
    itemList,
    handleDisplaySearchedItem,
    searchValue,
    height,
    width,
    background,
    border = true,
    borderRadius,
    iconColor,
    fontSize,
  } = props;

  const [searchTerm, setsearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);
  const searchbarRef = useRef(null);

  const clearSearchTerm = () => setsearchTerm("");

  const searchResults =
    !isEmpty(itemList) &&
    itemList.filter((item) => {
      if (
        searchTerm !== "" &&
        item[searchValue as keyof typeof item]
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase())
      ) {
        return item;
      }
    });

  const searchResultsPresent =
    searchActive && searchResults && searchResults.length > 0;

  const options =
    !isEmpty(searchResults) &&
    searchResults.map((item, id) => {
      const colors = Object.values(AvatarColors).reverse();
      const avatarColor = colors[id % colors.length];

      return (
        <styled.DropdownOption
          key={item.id}
          onClick={() => {
            handleDisplaySearchedItem(item.id);
            setSearchActive(false);
            clearSearchTerm();
          }}
        >
          <styled.OptionNameAvatar
            fontSize={12}
            initials={item && `${item.name[0]}`}
            avatarSize={30}
            color={avatarColor}
          />
          <styled.OptionName>
            {item && `${item.name} ${item.surname}`}
          </styled.OptionName>
        </styled.DropdownOption>
      );
    });

  return (
    <Dropdown
      clearSearchValue={clearSearchTerm}
      isSearch
      options={options}
      displayDropdown={searchResultsPresent}
    >
      <styled.SearchWrapper
        ref={searchbarRef}
        searchResultsPresent={searchResultsPresent}
        height={height}
        width={width}
        background={background}
        border={border}
        borderRadius={borderRadius}
        {...props}
      >
        <styled.SearchBox ref={searchRef} onClick={() => setSearchActive(true)}>
          <styled.InputWrapper>
            <styled.SearchIcon>
              <SearchIcon
                size={23}
                color={iconColor ? iconColor : Color.iconGray}
              />
            </styled.SearchIcon>
            <styled.SearchInput
              fontSize={fontSize}
              iconColor={iconColor}
              placeholder="Type some text to search..."
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </styled.InputWrapper>
        </styled.SearchBox>
      </styled.SearchWrapper>
    </Dropdown>
  );
};
