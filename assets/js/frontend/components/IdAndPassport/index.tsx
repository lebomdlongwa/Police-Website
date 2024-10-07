import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { SearchIcon } from "../icons/search";
import { Color } from "../colorCodes";
import { IdPpComponent } from "./idPpComponent";
import { useUser } from "../../containers/userContext";
import AddFormComponent from "../AddForm/addForm";
import { fetchData } from "../../containers/requests";
import { fetchIds } from "./actions";

export const IdPassportPage = () => {
  const { admin } = useUser();
  const [idList, setIdList] = useState<IdItem[]>([]);

  const [showAddForm, setShowAddForm] = useState(false);
  const handleShowAddForm = () => setShowAddForm(!showAddForm);

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
          <styled.SearchBox>
            <styled.SearchIcon>
              <SearchIcon h={22} w={22} c={Color.iconGray} />
            </styled.SearchIcon>
            <styled.SearchInput placeholder="Type some text to search..."></styled.SearchInput>
          </styled.SearchBox>
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      {idList.map((item) => {
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
