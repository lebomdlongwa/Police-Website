import React from "react";
import * as styled from "./styles";

type PeopleListComponentProps = {
  handleShowPersonInfo: (id: string) => void;
  peopleList: MissingPersonParams[];
};

export const PeopleListComponent = (props: PeopleListComponentProps) => {
  const { handleShowPersonInfo, peopleList } = props;

  return (
    <styled.VerticalListWrapper>
      <styled.Container>
        {peopleList &&
          peopleList?.map((person) => (
            <styled.PersonTile
              onClick={() => {
                handleShowPersonInfo(person.id);
              }}
            >
              <styled.TileContent>
                <styled.Details>
                  <styled.Name>
                    <div>{person.fullname}</div>
                  </styled.Name>
                  {/* <styled.SurName>
                      <div>{person.surname}</div>
                    </styled.SurName> */}
                </styled.Details>
              </styled.TileContent>
            </styled.PersonTile>
          ))}
      </styled.Container>
    </styled.VerticalListWrapper>
  );
};
