import React, { useEffect, useRef } from "react";
import * as styled from "./styles";
import { PreviousIcon } from "../icons/previous";
import { NextIcon } from "../icons/next";

export const HorizontalPeopleList = () => {
  const missingPeopleRef = useRef(null);
  const wantedPeopleRef = useRef(null);

  const ScrollToMissingList = () => {
    missingPeopleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToWantedLIst = () => {
    wantedPeopleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("missingScrollEvent", ScrollToMissingList);
    document.addEventListener("wantedScrollEvent", ScrollToWantedLIst);

    return () => {
      document.removeEventListener("missingScrollEvent", ScrollToMissingList);
      document.removeEventListener("wantedScrollEvent", ScrollToWantedLIst);
    };
  }, []);

  return (
    <styled.ListContainer>
      <styled.MissingListWrapper>
        <styled.ListHeader ref={missingPeopleRef}>
          Latest Missing People
        </styled.ListHeader>
        <styled.ListWrapper>
          <styled.PreviousButton>
            <PreviousIcon h={30} w={30} c="black" />
          </styled.PreviousButton>
          <styled.TilesWrapper>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
          </styled.TilesWrapper>
          <styled.NextButton>
            <NextIcon h={30} w={30} c="black" />
          </styled.NextButton>
        </styled.ListWrapper>
      </styled.MissingListWrapper>
      <styled.WantedListWrapper>
        <styled.ListHeader ref={wantedPeopleRef}>
          Latest Wanted People
        </styled.ListHeader>
        <styled.ListWrapper>
          <styled.PreviousButton>
            <PreviousIcon h={30} w={30} c="black" />
          </styled.PreviousButton>
          <styled.TilesWrapper>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
            <styled.PersonTiles></styled.PersonTiles>
          </styled.TilesWrapper>
          <styled.NextButton>
            <NextIcon h={30} w={30} c="black" />
          </styled.NextButton>
        </styled.ListWrapper>
      </styled.WantedListWrapper>
    </styled.ListContainer>
  );
};
