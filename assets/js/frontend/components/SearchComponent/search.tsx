import React, { useState, useRef, useEffect } from "react";
import * as styled from "./styles";
import { Color } from "../colorCodes";
import { SearchIcon } from "../icons/search";

type SearchComponentProps = {
  idList: IdItem[];
  handleDisplaySearchedId: (id: string) => void;
};

export const SearchComponent = (props: SearchComponentProps) => {
  const { idList, handleDisplaySearchedId } = props;

  const [distanceToTop, setDistanceToTop] = useState(0);
  const [searchbarWidth, setSearchbarWidth] = useState(0);
  const [searchBarLeft, setSearchBarLeft] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);
  const searchbarRef = useRef(null);

  const searchResults =
    idList &&
    idList.filter((item) => {
      if (
        searchTerm !== "" &&
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      ) {
        return item;
      }
    });

  const searchResultsPresent =
    searchActive && searchResults && searchResults.length > 0;

  useEffect(() => {
    const measureDistance = () => {
      if (searchRef.current) {
        const select = searchRef.current.getBoundingClientRect();
        setDistanceToTop(select.bottom);
      }
      if (searchbarRef.current) {
        const select = searchbarRef.current.getBoundingClientRect();
        setSearchbarWidth(select.width);
        setSearchBarLeft(select.left);
      }
    };

    window.addEventListener("scroll", measureDistance);
    window.addEventListener("resize", measureDistance);

    measureDistance();

    return () => {
      window.removeEventListener("scroll", measureDistance);
      window.removeEventListener("resize", measureDistance);
    };
  }, []);

  return (
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
            <SearchIcon h={22} w={22} c={Color.iconGray} />
          </styled.SearchIcon>
          <styled.SearchInput
            placeholder="Type some text to search..."
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </styled.InputWrapper>
      </styled.SearchBox>
      {searchResultsPresent && searchActive && (
        <styled.DropdownWrapper
          distanceToTop={distanceToTop}
          searchbarWidth={searchbarWidth}
          searchBarLeft={searchBarLeft}
        >
          {searchResults.map((item) => {
            const fullname = item && `${item.name} ${item.surname}`;
            const initials = item && `${item.name[0]}`;

            return (
              <styled.DropdownOption
                onClick={() => {
                  handleDisplaySearchedId(item.id);
                  setSearchActive(false);
                }}
              >
                <styled.OptionNameAvatar
                  fontSize={12}
                  initials={initials}
                  avatarSize={30}
                />
                <styled.OptionName>{fullname}</styled.OptionName>
              </styled.DropdownOption>
            );
          })}
        </styled.DropdownWrapper>
      )}
    </styled.SearchWrapper>
  );
};
