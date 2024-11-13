import React from "react";
import * as styled from "./styles";
import { XIcon } from "../../../components/icons/xIcon";
import { Color } from "../../../components/colorCodes";
import { PeopleIcon } from "../../../components/icons/people";
import { MenuIcon } from "../../../components/icons/menu";
import { GeneralInfoComponent } from "./GeneralInfo/generalInfo";
import { DeleteIcon } from "../../../components/icons/delete";
import { SinglePersonIcon } from "../../../components/icons/singlePerson";
import { ThreeDotsIcon } from "../../../components/icons/threeDots";

export const ChatEndBar = () => {
  return (
    <styled.EndBarWrapper>
      <styled.Header>
        <styled.HeaderButtonsWrapper>
          <styled.Button>
            <DeleteIcon size={25} color="gray" />
          </styled.Button>
          <styled.Button active={true}>
            <SinglePersonIcon size={25} color="gray" />
          </styled.Button>
        </styled.HeaderButtonsWrapper>
      </styled.Header>
      <styled.DetailsWrapper>
        <styled.DetailsHeader>
          <styled.DetailsHeaderLabel>Details</styled.DetailsHeaderLabel>
          <styled.DetailSettings>
            <ThreeDotsIcon size={17} color="black" />
          </styled.DetailSettings>
        </styled.DetailsHeader>
        <styled.InfoSectionWrapper>
          <GeneralInfoComponent />
        </styled.InfoSectionWrapper>
      </styled.DetailsWrapper>
    </styled.EndBarWrapper>
  );
};
