import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { IdPpComponent } from "./idPpComponent";
import { useUser } from "../userContext";
import AddFormComponent from "./AddForm/addForm";
import { fetchData } from "../requests";
import { fetchIds } from "./actions";
import { SearchComponent } from "../../components/SearchComponent/search";
import { BackIcon } from "../../components/icons/back";
import { Color } from "../../components/colorCodes";

export const IdPassportPage = () => {
  const { admin } = useUser();
  const [idList, setIdList] = useState<IdItem[]>([]);
  const [searchedId, setSearchedId] = useState<string>(null);
  const [displaySearchedId, setDisplaySearchedId] = useState(false);

  const [showAddForm, setShowAddForm] = useState(false);
  const handleShowAddForm = () => setShowAddForm(!showAddForm);

  const handleDisplaySearchedId = (id: string) => {
    setDisplaySearchedId(!displaySearchedId);
    setSearchedId(id);
  };

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
            idList={idList}
            handleDisplaySearchedId={handleDisplaySearchedId}
          />
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      {searchedId && idList && (
        <styled.SearchedResultWrapper>
          <styled.BackButton>
            <styled.IconWrapper onClick={() => setSearchedId(null)}>
              <BackIcon w={50} h={50} c={Color.navyBlueLighter} />
            </styled.IconWrapper>
            <styled.BackButtonText>Go back to ID list</styled.BackButtonText>
          </styled.BackButton>
          <IdPpComponent
            item={idList.find((item) => item.id === searchedId)!}
          />
        </styled.SearchedResultWrapper>
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
