import React from "react";
import * as styled from "./styles";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Individual } from "../../containers/People/MissingPeople/individual";
import { routes } from "../../containers/PoliceApp";

type People = {
  name: string;
  surname: string;
  age: number;
  last_seen: string;
  location_last_seen: string;
}[];

export const PeopleListComponent = ({ people }: { people: People }) => {
  const { pathname } = useLocation();

  return (
    <>
      <styled.VerticalListWrapper>
        <styled.Container>
          {people?.map((person) => (
            <styled.PersonTile to={`${routes.missing}/:id`}>
              <styled.TileContent>
                <styled.Details>
                  <styled.Name>
                    <div>{person.name}</div>
                  </styled.Name>
                  <styled.SurName>
                    <div>{person.surname}</div>
                  </styled.SurName>
                </styled.Details>
              </styled.TileContent>
            </styled.PersonTile>
          ))}
        </styled.Container>
        <styled.Container>
          {people.map((person) => (
            <styled.PersonTile to={`${routes.missing}/:id`}>
              <styled.Details>
                <div>{person.name}</div>
                <div>{person.surname}</div>
              </styled.Details>
            </styled.PersonTile>
          ))}
        </styled.Container>
      </styled.VerticalListWrapper>
    </>
  );
};
