import React from "react";
import * as styled from "./styles";
import { Report } from "./report/report";
import { SearchIcon } from "../../components/icons/search";
import { Color } from "../../components/colorCodes";

export const ReportList = () => {
  return (
    <styled.ListWrapper>
      <styled.HeaderContainer>
        <styled.TopSubHeader>
          <styled.Title>Report Cases</styled.Title>
          <styled.AddItem text="Add Item" />
        </styled.TopSubHeader>
        <styled.BottomSubHeader>
          <styled.SearchBox>
            <styled.SearchIcon>
              <SearchIcon h={22} w={22} c={Color.iconGray} />
            </styled.SearchIcon>
            <styled.SearchInput placeholder="Type some text to search..."></styled.SearchInput>
          </styled.SearchBox>
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      <Report />
      <Report />
      <Report />
      <Report />
      <Report />
      <Report />
      <Report />
    </styled.ListWrapper>
  );
};
