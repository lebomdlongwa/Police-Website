import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { PeopleListComponent } from "../../../components/VerticalPeopleList";
import { PictureUpload } from "../../../components/Upload/picUpload";
import { fetchData } from "../../requests";
import { getMissingPersons } from "./Individual/actions";
import { useUser } from "../../userContext";

export const MissingList = () => {
  const [missingPeopleList, setMissingPersonList] = useState([]);
  const { admin } = useUser();

  useEffect(() => {
    fetchData(getMissingPersons, setMissingPersonList);
  }, []);

  return (
    <styled.MissingPeopleWrapper>
      <>
        {admin && <PictureUpload />}
        <PeopleListComponent peopleList={missingPeopleList} />
      </>
    </styled.MissingPeopleWrapper>
  );
};
