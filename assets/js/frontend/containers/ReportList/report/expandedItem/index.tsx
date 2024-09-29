import React from "react";
import * as styled from "./styles";
import { CrimeSceneIcon } from "../../../../components/icons/crimeScene";
import { Color } from "../../../../components/colorCodes";
import { RunningManIcon } from "../../../../components/icons/runningMan";
import { AccusedIcon } from "../../../../components/icons/accused";
import { LocationIcon } from "../../../../components/icons/location";

export const ExpandedComponent = () => {
  return (
    <styled.ExpandedItemWrapper>
      <styled.TopItemWrapper>
        <styled.BriefCircumstance>
          <styled.BriefCircumstanceHeader>
            BRIEF CIRCUMSTANCE
          </styled.BriefCircumstanceHeader>
          <styled.BriefCircumstanceContent>
            There are a few problems with this. One is that the input component
            cannot be reused separately from the enhanced component. More
            crucially, if you apply another HOC to EnhancedComponent that also
            mutates componentDidUpdate, the first HOC’s functionality will be
            overridden! This HOC also won’t work with function components, which
            do not have lifecycle methods.
          </styled.BriefCircumstanceContent>
        </styled.BriefCircumstance>
      </styled.TopItemWrapper>
      <styled.BottomItemWrapper>
        <styled.SceneAttendance>
          <styled.Icon>
            <LocationIcon h={18} w={18} />
            <styled.IconLabel>Attendance</styled.IconLabel>
          </styled.Icon>
        </styled.SceneAttendance>
        <styled.ActionTaken>
          <styled.Icon>
            <RunningManIcon h={20} w={20} />
            <styled.IconLabel>Action Taken</styled.IconLabel>
          </styled.Icon>
        </styled.ActionTaken>
        <styled.Accussed>
          <styled.Icon>
            <AccusedIcon h={23} w={23} />
            <styled.IconLabel>Accused</styled.IconLabel>
          </styled.Icon>
          <styled.Content>L MDLONGWA</styled.Content>
        </styled.Accussed>
      </styled.BottomItemWrapper>
    </styled.ExpandedItemWrapper>
  );
};
