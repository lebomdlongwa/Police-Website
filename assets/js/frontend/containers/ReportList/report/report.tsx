import React, { useState } from "react";
import * as styled from "./styles/report";

import { EditIcon } from "../../../components/icons/edit";
import { TrashIcon } from "../../../components/icons/trash";
import { SearchIcon } from "../../../components/icons/search";
import { Color } from "../../../components/colorCodes";
import { SpeakerIcon } from "../../../components/icons/speaker";
import { GradeIcon } from "../../../components/icons/grade";
import { CalendarIcon } from "../../../components/icons/calendar";
import PolicemanIcon from "../../../components/icons/policeman";
import { i18n } from "./utils/i18n";
import { InfoIcon } from "../../../components/icons/info";
import { ExpandedComponent } from "./expandedItem";

export const Report = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <styled.ReportWrapper>
      <styled.ReportBody onClick={handleExpand}>
        <styled.ReportItemWrapper>
          <styled.ReportItem>
            <styled.Informant>
              <styled.Icon>
                <SpeakerIcon h={20} w={20} />
                <styled.IconLabel>INFORMANT</styled.IconLabel>
              </styled.Icon>
              <styled.Content>BUKHOSI NDLELA</styled.Content>
            </styled.Informant>
            <styled.CaseNumber>
              <styled.Icon>
                <InfoIcon h={18} w={18} />
                <styled.IconLabel>CASE No.</styled.IconLabel>
              </styled.Icon>
              <styled.Content>76873-J</styled.Content>
            </styled.CaseNumber>
            <styled.Officer>
              <styled.Icon>
                <PolicemanIcon h={21} w={21} />
                <styled.IconLabel>Officer</styled.IconLabel>
              </styled.Icon>
              <styled.Content>B CHIKOVORE</styled.Content>
            </styled.Officer>
            <styled.ReportGrade>
              <styled.Icon>
                <GradeIcon h={19} w={19} />
                <styled.IconLabel>GRADE</styled.IconLabel>
              </styled.Icon>
              <styled.Content>A</styled.Content>
            </styled.ReportGrade>
            <styled.ReportDate>
              <styled.Icon>
                <CalendarIcon h={15} w={15} />
                <styled.IconLabel>REPORT DATE</styled.IconLabel>
              </styled.Icon>
              <styled.Content>27-10-01</styled.Content>
            </styled.ReportDate>
            <styled.ButtonsWrapper>
              <styled.Button>
                <EditIcon h={24} w={24} />
              </styled.Button>
              <styled.ButtonDivider />
              <styled.Button>
                <TrashIcon h={20} w={20} />
              </styled.Button>
            </styled.ButtonsWrapper>
          </styled.ReportItem>
          {!expand && <ExpandedComponent />}
        </styled.ReportItemWrapper>
      </styled.ReportBody>
    </styled.ReportWrapper>
  );
};
