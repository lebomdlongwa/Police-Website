import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { PeopleListComponent } from "../../../components/VerticalPeopleList";
import { PictureUpload } from "../../../components/Upload/picUpload";
import { fetchData } from "../../requests";
import { getMissingPersons } from "./Individual/actions";
import { useUser } from "../../userContext";
import { getUploadedFiles } from "./actions";
import { Button } from "../../../components/Button/button";
import { Color } from "../../../components/colorCodes";
import { StyledLink } from "../../styles/app";
import { routes } from "../../PoliceApp";

export const MissingList = () => {
  const [missingPeopleList, setMissingPersonList] = useState([]);
  const [missingUploads, setMissingUploads] = useState([]);
  const { admin } = useUser();

  useEffect(() => {
    fetchData(getMissingPersons, setMissingPersonList);
    fetchData(getUploadedFiles, setMissingUploads);
  }, []);

  return (
    <styled.MissingPeopleWrapper>
      <StyledLink to={`${routes.missing}/:id`}>
        <Button
          text="Upload New Missing Person"
          buttonColor={Color.black}
          buttonColorOnHover={Color.lightBlack}
        />
      </StyledLink>
      <PeopleListComponent peopleList={missingPeopleList} />
    </styled.MissingPeopleWrapper>
  );
};
