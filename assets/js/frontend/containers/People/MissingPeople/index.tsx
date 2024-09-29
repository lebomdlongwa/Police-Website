import React from "react";
import * as styled from "./styles";
import { PeopleListComponent } from "../../../components/VerticalPeopleList";
import { PictureUpload } from "../../../components/Upload/picUpload";

export const MissingList = () => {
  const peopleArr = [
    {
      name: "Lebohang",
      surname: "Mddlongwa",
      age: 23,
      last_seen: "27/10/01",
      location_last_seen: "Nketa 6",
    },
    {
      name: "Michael",
      surname: "Ndlovu",
      age: 20,
      last_seen: "14/08/24",
      location_last_seen: "Lobhengula",
    },
    {
      name: "Lebohang",
      surname: "Mddlongwa",
      age: 23,
      last_seen: "27/10/01",
      location_last_seen: "Nketa 6",
    },
    {
      name: "Lebohang",
      surname: "Mddlongwa",
      age: 23,
      last_seen: "27/10/01",
      location_last_seen: "Nketa 6",
    },
    {
      name: "Lebohang",
      surname: "Mddlongwa",
      age: 23,
      last_seen: "27/10/01",
      location_last_seen: "Nketa 6",
    },
  ];

  return (
    <styled.MissingPeopleWrapper>
      <PictureUpload />
      <PeopleListComponent people={peopleArr} />
    </styled.MissingPeopleWrapper>
  );
};
