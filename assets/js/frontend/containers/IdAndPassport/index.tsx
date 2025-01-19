import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { IdPpComponent } from "./idPpComponent";
import { useUser } from "../userContext";
import AddFormComponent from "./AddForm/addForm";
import { fetchData } from "../requests";
import { fetchIds } from "./actions";
import { SearchComponent } from "../../components/SearchComponent/search";
import { SearchedResultComponent } from "../../components/SearchedResult";

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
      {searchedId && idList && (
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
        idList.map((item) => {
          return <IdPpComponent item={item} setIdList={setIdList} />;
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
    </styled.IdPpContainer>
  );
};
