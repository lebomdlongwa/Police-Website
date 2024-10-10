import React, { useState, useRef, useEffect } from "react";
import * as styled from "./styles";
import { Color } from "../colorCodes";
import { SearchIcon } from "../icons/search";

type SearchComponentProps = {
  idList: IdItem[];
};

export const SearchComponent = (props: SearchComponentProps) => {
  const { idList } = props;

  const [distanceToTop, setDistanceToTop] = useState(0);
  const [searchbarWidth, setSearchbarWidth] = useState(0);
  const [searchBarLeft, setSearchBarLeft] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");
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

  const searchActive = searchResults && searchResults.length > 0;

  return (
    <styled.SearchWrapper ref={searchbarRef} searchActive={searchActive}>
      <styled.SearchBox ref={searchRef}>
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
      {searchActive && (
        <styled.DropdownWrapper
          distanceToTop={distanceToTop}
          searchbarWidth={searchbarWidth}
          searchBarLeft={searchBarLeft}
        >
          {searchActive &&
            searchResults.map((item) => {
              const fullname = item && `${item.name} ${item.surname}`;
              const initials = item && `${item.name[0]}${item.surname[0]}`;

              return (
                <styled.DropdownOption>
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
