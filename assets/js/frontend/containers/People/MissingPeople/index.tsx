import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { PeopleListComponent } from "../../../components/VerticalPeopleList";
import { fetchData } from "../../requests";
import { getMissingPersons } from "./Individual/actions";
import { useUser } from "../../userContext";
import { Button } from "../../../components/Button/button";
import { Color } from "../../../components/colorCodes";
import { StyledLink } from "../../styles/app";
import { routes } from "../../PoliceApp";

export const MissingList = () => {
  const [missingPeopleList, setMissingPersonList] = useState([]);
  const { admin } = useUser();

  useEffect(() => {
    fetchData(getMissingPersons, setMissingPersonList);
  }, []);

  return (
    <styled.MissingPeopleWrapper>
      <StyledLink to={`${routes.missing}/:id`}>
        {admin && (
          <Button
            text="Upload New Missing Person"
            buttonColor={Color.black}
            buttonColorOnHover={Color.lightBlack}
          />
        )}
      </StyledLink>
      <PeopleListComponent peopleList={missingPeopleList} />
    </styled.MissingPeopleWrapper>
  );
};
