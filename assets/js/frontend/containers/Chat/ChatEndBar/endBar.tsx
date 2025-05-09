import React from "react";
import * as styled from "./styles";
import { GeneralInfoComponent } from "./GeneralInfo/generalInfo";
import { DeleteIcon } from "../../../components/icons/delete";
import { SinglePersonIcon } from "../../../components/icons/singlePerson";
import { ThreeDotsIcon } from "../../../components/icons/threeDots";
import { Color } from "../../../components/colorCodes";

type ChatEndBarProps = {
  ShowPersonDetails: VoidCallBack;
};

export const ChatEndBar = (props: ChatEndBarProps) => {
  const { ShowPersonDetails } = props;

  return (
    <styled.EndBarWrapper>
      <styled.Header>
        <styled.HeaderButtonsWrapper>
          <styled.Button onClick={ShowPersonDetails}>
            <DeleteIcon size={25} color={Color.red} />
          </styled.Button>
          <styled.Button active={true}>
            <SinglePersonIcon size={25} color={Color.veryDarkBlue} />
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
