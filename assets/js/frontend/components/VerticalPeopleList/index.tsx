import React from "react";

import { isEmpty } from "lodash";

import * as styled from "./styles";

import { routes } from "../../containers/PoliceApp";
import { CircleLoader } from "../Spinner";

type PeopleListComponentProps = {
  peopleList: MissingPersonParams[];
};

export const PeopleListComponent = (props: PeopleListComponentProps) => {
  const { peopleList } = props;

  return (
    <styled.VerticalListWrapper>
      {isEmpty(peopleList) ? (
        <CircleLoader size={60} />
      ) : (
        <styled.Container>
          {peopleList?.map((person) => (
            <styled.PersonTile
              img={person.img_url}
              to={`${routes.missing}/${person.id}`}
            >
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
      )}
    </styled.VerticalListWrapper>
  );
};
