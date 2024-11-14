import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { PeopleListComponent } from "../../../components/VerticalPeopleList";
import { PictureUpload } from "../../../components/Upload/picUpload";
import { fetchData } from "../../requests";
import {
  addMissingPerson,
  deleteMissingPerson,
  getMissingPersons,
  updateMissingPerson,
} from "./actions";
import { Individual } from "./individual";

export const MissingList = () => {
  const [missingPeopleList, setMissingPersonList] = useState([]);
  const [showPersonInfo, setShowPersonInfo] = useState(false);
  const [clickedPersonId, setClickedPersonId] = useState("");

  const handleShowPersonInfo = (id: string) => {
    setClickedPersonId(id);
    setShowPersonInfo(!showPersonInfo);
  };

  useEffect(() => {
    fetchData(getMissingPersons, setMissingPersonList);
  }, []);

  // const handleGetMissingPerson = async (getType: SortByType) => {
  //   const params = {
  //     type: getType,
  //   };
  //   const response = await getMissingPersons();
  //   setMissingPersonList(response);
  // };

  const handleAddMissingPerson = async (params: MissingPersonParams) => {
    const response = await addMissingPerson(params);
    setMissingPersonList(response);
  };

  const handleUpdateMissingPerson = async (
    id: string,
    params: MissingPersonParams
  ) => {
    const response = await updateMissingPerson(id, params);
    setMissingPersonList(response);
  };

  const handleDeleteMissingPerson = async (id: string) => {
    const response = await deleteMissingPerson(id);
    setMissingPersonList(response);
  };

  const clickedPersonItem =
    missingPeopleList &&
    missingPeopleList.find((people) => clickedPersonId === people.id);

  return (
    <styled.MissingPeopleWrapper>
      {!showPersonInfo && (
        <>
          <PictureUpload />
          <PeopleListComponent
            handleShowPersonInfo={handleShowPersonInfo}
            peopleList={missingPeopleList}
          />
        </>
      )}
      {showPersonInfo && (
        <Individual
          onAddPerson={handleAddMissingPerson}
          onUpdatePerson={handleUpdateMissingPerson}
          peopleList={missingPeopleList}
          handleShowPersonInfo={handleShowPersonInfo}
          showPersonInfo={showPersonInfo}
          clickedPersonItem={clickedPersonItem}
        />
      )}
    </styled.MissingPeopleWrapper>
  );
};
