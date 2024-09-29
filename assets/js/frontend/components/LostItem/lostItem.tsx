import React, { useState } from "react";
import * as styled from "./styles/lostitem";

export const LostItems = () => {
  // const [itemsList, setItemsList] = useState();

  // const handleExpand = (id: string) => {
  //   lostItems.map((item) => {
  //     if (id === item.id) {
  //       return { ...item, expanded: !item.expanded };
  //     }

  //     return;
  //   });
  // };

  const lostItems = [
    {
      tag: "Lebohang Mdlongwa",
      item: "bag",
      date_lost: "24-03-12",
      expanded: false,
    },
    {
      tag: "Lebohang Mdlongwa",
      item: "purse",
      date_lost: "24-03-12",
      expanded: false,
    },
    {
      tag: "Lebohang Mdlongwa",
      item: "car",
      date_lost: "24-03-12",
      expanded: false,
    },
    {
      tag: "Lebohang Mdlongwa",
      item: "bottle",
      date_lost: "24-03-12",
      expanded: false,
    },
    {
      tag: "Lebohang Mdlongwa",
      item: "bag",
      date_lost: "24-03-12",
      expanded: false,
    },
    {
      tag: "Lebohang Mdlongwa",
      item: "bag",
      date_lost: "24-03-12",
      expanded: false,
    },
  ];

  return (
    <styled.IdPpContainer>
      <styled.HeaderContainer>
        <styled.Title>Lost Items</styled.Title>
        <styled.SearchBox>
          <styled.SearchButton>
            <styled.SearchIcon></styled.SearchIcon>
          </styled.SearchButton>
          <styled.SearchInput></styled.SearchInput>
        </styled.SearchBox>
      </styled.HeaderContainer>
      <styled.IdPpWrapper>
        {lostItems.map((item) => (
          <styled.ItemContainer>
            <styled.ItemWrapper>
              <styled.Item>
                <styled.ItemContent>
                  <styled.TagName>{item.tag}</styled.TagName>
                  <styled.ItemLost>{item.item}</styled.ItemLost>
                  <styled.DateLost>{item.date_lost}</styled.DateLost>
                </styled.ItemContent>
              </styled.Item>
              <styled.ButtonsWrapper>
                <styled.Button>E</styled.Button>|
                <styled.Button>X</styled.Button>
              </styled.ButtonsWrapper>
            </styled.ItemWrapper>
            {item.expanded && (
              <styled.ExpandedItem>Expanded Details</styled.ExpandedItem>
            )}
          </styled.ItemContainer>
        ))}
      </styled.IdPpWrapper>
    </styled.IdPpContainer>
  );
};
