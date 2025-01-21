import React from "react";
import * as styled from "./styles";
import { routes } from "../../containers/PoliceApp";

type PeopleListComponentProps = {
  peopleList: MissingPersonParams[];
};

export const PeopleListComponent = (props: PeopleListComponentProps) => {
  const { peopleList } = props;

  return (
    <styled.VerticalListWrapper>
      <styled.Container>
        {peopleList &&
          peopleList?.map((person) => (
            <styled.PersonTile to={`${routes.missing}/${person.id}`}>
              <styled.TileContent>
                <styled.Details>
                  <styled.NameAndAge>
                    <div>{`${person.fullname} (${person.age})`}</div>
                  </styled.NameAndAge>
                </styled.Details>
              </styled.TileContent>
            </styled.PersonTile>
          ))}
      </styled.Container>
    </styled.VerticalListWrapper>
  );
};
