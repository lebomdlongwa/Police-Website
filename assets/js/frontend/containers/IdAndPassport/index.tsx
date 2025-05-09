import React, { useEffect, useState } from "react";

import { isEmpty } from "lodash";

import * as styled from "./styles";
import AddFormComponent from "./AddForm/addForm";
import { IdPpComponent } from "./idPpComponent";
import { fetchIds } from "./actions";

import { useUser } from "../userContext";
import { fetchData } from "../requests";
import { SearchComponent } from "../../components/SearchComponent/search";
import { SearchedResultComponent } from "../../components/SearchedResult";
import { Spinner } from "../../components/Spinner";
import { AvatarColors } from "../../components/colorCodes";

export const IdPassportPage = () => {
  const { admin } = useUser();
  const [idList, setIdList] = useState<IdItem[]>([]);
  const [searchedId, setSearchedId] = useState<string>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const handleShowAddForm = () => setShowAddForm(!showAddForm);
  const handleSetSearchIdNull = () => setSearchedId(null);

  const handleDisplaySearchedId = (id: string) => setSearchedId(id);

  useEffect(() => {
    fetchData(fetchIds, setIdList);
  }, []);

  return (
    <styled.IdPpContainer>
      <styled.HeaderContainer>
        <styled.TopSubHeader>
          <styled.Title>Lost IDs and Passports</styled.Title>
          <styled.AddItem
            text="Add Item"
            onClick={handleShowAddForm}
            admin={admin}
          />
        </styled.TopSubHeader>
        <styled.BottomSubHeader>
          <SearchComponent
            itemList={idList}
            searchValue="name"
            handleDisplaySearchedItem={handleDisplaySearchedId}
          />
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      <styled.BodyContainer center={isEmpty(idList)}>
        {isEmpty(idList) ? (
          <Spinner size={30} />
        ) : (
          <>
            {searchedId && (
              <SearchedResultComponent
                list={idList}
                listName="ID"
                setSearchedIdNull={handleSetSearchIdNull}
                searchedId={searchedId}
                SearchedComponent={IdPpComponent}
                itemName="item"
              />
            )}
            {!searchedId &&
              idList.map((item, id) => {
                const colors = Object.values(AvatarColors);
                const avatarColor = colors[id % colors.length];

                return (
                  <IdPpComponent
                    key={item.id}
                    item={item}
                    setIdList={setIdList}
                    avatarColor={avatarColor}
                  />
                );
              })}
            {showAddForm && (
              <>
                <AddFormComponent
                  handleShowAddForm={handleShowAddForm}
                  showAddForm={showAddForm}
                  setIdList={setIdList}
                />
              </>
            )}
          </>
        )}
      </styled.BodyContainer>
    </styled.IdPpContainer>
  );
};
