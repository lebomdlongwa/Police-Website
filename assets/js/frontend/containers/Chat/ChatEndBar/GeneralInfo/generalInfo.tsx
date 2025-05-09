import React from "react";
import * as styled from "./styles/generalInfo";
import { AvatarComponent } from "../../../../components/Avatar/avatar";
import { LocationIcon } from "../../../../components/icons/location";
import { ClockIcon } from "../../../../components/icons/clock";
import { AvatarColors, Color } from "../../../../components/colorCodes";
import { useUser } from "../../../userContext";

export const GeneralInfoComponent = () => {
  const { user } = useUser();
  const colors = Object.values(AvatarColors);
  const avatarColor = colors[user.id % colors.length];

  console.log(user);

  return (
    <styled.GeneralCardWrapper>
      <styled.GeneralCardContent>
        <styled.GeneralCardHeader>General Info</styled.GeneralCardHeader>
        <styled.AvatarUserContainer>
          <AvatarComponent
            color={avatarColor}
            initials={user.name[0]}
            fontSize={14}
            avatarSize={32}
          />
          <styled.UserInfoWrapper>
            <styled.InfoContent style={{ fontWeight: "700" }}>
              {user.name} {user.surname}
            </styled.InfoContent>
          </styled.UserInfoWrapper>
        </styled.AvatarUserContainer>
        <styled.ExtraDetailsContatiner>
          <styled.ExtraDetailsWrapper>
            <LocationIcon w={13} h={13} c={Color.lightBlack} />
            <styled.ExtraDetailsContent>
              Nketa, Bulawayo
            </styled.ExtraDetailsContent>
          </styled.ExtraDetailsWrapper>
        </styled.ExtraDetailsContatiner>
      </styled.GeneralCardContent>
      <styled.GoogleMap></styled.GoogleMap>
    </styled.GeneralCardWrapper>
  );
};
