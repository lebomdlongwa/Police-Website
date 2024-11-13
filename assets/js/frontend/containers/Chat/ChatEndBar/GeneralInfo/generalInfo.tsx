import React from "react";
import * as styled from "./styles/generalInfo";
import { AvatarComponent } from "../../../../components/Avatar/avatar";
import { LocationIcon } from "../../../../components/icons/location";
import { ClockIcon } from "../../../../components/icons/clock";
import { Color } from "../../../../components/colorCodes";

export const GeneralInfoComponent = () => {
  return (
    <styled.GeneralCardWrapper>
      <styled.GeneralCardContent>
        <styled.GeneralCardHeader>General Info</styled.GeneralCardHeader>
        <styled.AvatarUserContainer>
          <AvatarComponent initials="L" fontSize={14} avatarSize={32} />
          <styled.UserInfoWrapper>
            <styled.InfoContent style={{ fontWeight: "700" }}>
              Lebohang Mdlongwa
            </styled.InfoContent>
            <styled.InfoContent>lebomdlongwa@gmail.com</styled.InfoContent>
          </styled.UserInfoWrapper>
        </styled.AvatarUserContainer>
        <styled.TimeLocationContatiner>
          <styled.TimeLocationWrapper>
            <ClockIcon size={13} color={Color.lightBlack} />
            <styled.TimeLocationContent>
              3:33 pm local time
            </styled.TimeLocationContent>
          </styled.TimeLocationWrapper>
          <styled.TimeLocationWrapper>
            <LocationIcon w={13} h={13} c={Color.lightBlack} />
            <styled.TimeLocationContent>
              Nketa, Bulawayo
            </styled.TimeLocationContent>
          </styled.TimeLocationWrapper>
        </styled.TimeLocationContatiner>
      </styled.GeneralCardContent>
      <styled.GoogleMap></styled.GoogleMap>
    </styled.GeneralCardWrapper>
  );
};
