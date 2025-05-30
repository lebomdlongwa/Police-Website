import React, { useEffect, useRef, useState } from "react";

import { ReportModalComponent } from "../ReportModal/reportModal";
import * as styled from "./styles/report";
import { Icon } from "../../../components/icons";
import { ExpandedComponent } from "./expandedItem";
import { AvatarComponent } from "../../../components/Avatar/avatar";

type ReportProps = {
  report?: ReportItem;
  onUpdate?: (id: string, params: ReportParams) => Promise<void>;
  onDelete?: (id: string) => void;
  avatarColor?: string;
};

interface WrapperElement extends HTMLDivElement {
  contains: (target: EventTarget | undefined | null) => boolean;
}

export const Report = (props: ReportProps) => {
  const { report, onDelete, onUpdate, avatarColor } = props;

  const [showReportEditModal, setShowReportEditModal] = useState(false);
  const handleShowReportEditModal = () =>
    setShowReportEditModal(!showReportEditModal);

  const [expand, setExpand] = useState(false);
  const handleExpand = () => setExpand(!expand);

  const wrapperRef = useRef<WrapperElement>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        expand &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        handleExpand();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleExpand]);

  const informant = `${report.name} ${report.surname}`;
  const caseNumber = `2025-${report.id}`;

  return (
    <styled.ReportWrapper expand={expand}>
      <styled.ReportBody>
        <styled.ReportItemWrapper ref={wrapperRef} expand={expand}>
          <styled.ReportItem>
            <styled.AvatarWrapper>
              <AvatarComponent
                color={avatarColor}
                avatarSize={48}
                initials={report.name[0]}
              />
            </styled.AvatarWrapper>
            <styled.ReportContent onClick={handleExpand}>
              <styled.Informant>
                <styled.Icon>
                  <Icon name="person" />
                  <styled.IconLabel>INFORMANT</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{informant}</styled.Content>
              </styled.Informant>
              <styled.CaseNumber>
                <styled.Icon>
                  <Icon name="caseNumber" />
                  <styled.IconLabel>CASE No.</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{caseNumber}</styled.Content>
              </styled.CaseNumber>
              <styled.Officer>
                <styled.Icon>
                  <Icon name="police" size={21} />
                  <styled.IconLabel>OFFICER</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{report.officer}</styled.Content>
              </styled.Officer>
              <styled.ReportGrade>
                <styled.Icon>
                  <Icon name="grade" />
                  <styled.IconLabel>GRADE</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{report.grade}</styled.Content>
              </styled.ReportGrade>
              <styled.ReportDate>
                <styled.Icon>
                  <Icon name="calendar" color="red" />
                  <styled.IconLabel>REPORT DATE</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{report.report_date}</styled.Content>
              </styled.ReportDate>
            </styled.ReportContent>
            <styled.ButtonsWrapper>
              <styled.Button onClick={handleShowReportEditModal}>
                <Icon name="edit" color="black" size={19} />
              </styled.Button>
              <styled.ButtonDivider />
              <styled.Button onClick={() => onDelete(report.id)}>
                <Icon name="trash" size={17} />
              </styled.Button>
            </styled.ButtonsWrapper>
          </styled.ReportItem>
          {expand && <ExpandedComponent report={report} onUpdate={onUpdate} />}
        </styled.ReportItemWrapper>
      </styled.ReportBody>
      {showReportEditModal && (
        <ReportModalComponent
          report={report}
          showReportEditModal={showReportEditModal}
          handleShowReportEditModal={handleShowReportEditModal}
          onUpdate={onUpdate}
        />
      )}
    </styled.ReportWrapper>
  );
};
