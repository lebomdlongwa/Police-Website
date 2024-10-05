import React from "react";
import * as styled from "./styles";
import { RunningManIcon } from "../../../../components/icons/runningMan";
import { AccusedIcon } from "../../../../components/icons/accused";
import { LocationIcon } from "../../../../components/icons/location";

type ExpandedComponentProps = {
  report: ReportItem;
};

export const ExpandedComponent = (props: ExpandedComponentProps) => {
  const { report } = props;

  return (
    <styled.ExpandedItemWrapper>
      <styled.TopItemWrapper>
        <styled.BriefCircumstance>
          <styled.BriefCircumstanceHeader>
            BRIEF CIRCUMSTANCE
          </styled.BriefCircumstanceHeader>
          <styled.BriefCircumstanceContent>
            {report.brief_circumstance}
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
          <styled.Content>{report.accused}</styled.Content>
        </styled.Accussed>
      </styled.BottomItemWrapper>
    </styled.ExpandedItemWrapper>
  );
};
