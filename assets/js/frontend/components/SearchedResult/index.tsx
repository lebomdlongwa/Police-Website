import React, { FC } from "react";
import * as styled from "./styles";
import { Color } from "../colorCodes";
import { BackIcon } from "../icons/back";

type SearchedResultComponentProps = {
  setSearchedIdNull: VoidCallBack;
  list: Record<string, any>[];
  searchedId: string;
  SearchedComponent: FC<{ [key: string]: Record<string, any> }>;
  listName: string;
  itemName: string;
};

export const SearchedResultComponent = (
  props: SearchedResultComponentProps
) => {
  const {
    setSearchedIdNull,
    list,
    searchedId,
    SearchedComponent,
    listName,
    itemName,
  } = props;

  const searchedItem = list.find((item) => item.id === searchedId);

  return (
    <styled.SearchedResultWrapper>
      <styled.BackButton>
        <styled.IconWrapper onClick={setSearchedIdNull}>
          <BackIcon size={50} color={Color.navyBlueLighter} />
        </styled.IconWrapper>
        <styled.BackButtonText>{`Go back to ${listName} list`}</styled.BackButtonText>
      </styled.BackButton>
      <SearchedComponent {...{ [itemName]: searchedItem }} />
    </styled.SearchedResultWrapper>
  );
};
