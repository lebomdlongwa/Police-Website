import React, { useState, useRef } from "react";
import * as styled from "./styles";
import { Color } from "../colorCodes";
import { SearchIcon } from "../icons/search";
import { Dropdown } from "../Dropdown/dropdown";

type SearchComponentProps = {
  itemList: any[];
  handleDisplaySearchedItem: (id: string) => void;
  searchValue: string;
};

export const SearchComponent = (props: SearchComponentProps) => {
  const { itemList, handleDisplaySearchedItem, searchValue } = props;

  const [searchTerm, setsearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);
  const searchbarRef = useRef(null);

  const searchResults =
    itemList &&
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

  const options = searchResults.map((item) => (
    <styled.DropdownOption
      onClick={() => {
        handleDisplaySearchedItem(item.id);
        setSearchActive(false);
      }}
      key={item.id}
    >
      <styled.OptionNameAvatar
        fontSize={12}
        initials={item && `${item.name[0]}`}
        avatarSize={30}
      />
      <styled.OptionName>
        {item && `${item.name} ${item.surname}`}
      </styled.OptionName>
    </styled.DropdownOption>
  ));

  return (
    <Dropdown options={options} displayDropdown={searchResultsPresent}>
      <styled.SearchWrapper
        ref={searchbarRef}
        searchResultsPresent={searchResultsPresent}
      >
        <styled.SearchBox
          ref={searchRef}
          onClick={() => setSearchActive(!searchActive)}
        >
          <styled.InputWrapper>
            <styled.SearchIcon>
              <SearchIcon size={23} color={Color.iconGray} />
            </styled.SearchIcon>
            <styled.SearchInput
              placeholder="Type some text to search..."
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </styled.InputWrapper>
        </styled.SearchBox>
      </styled.SearchWrapper>
    </Dropdown>
  );
};
