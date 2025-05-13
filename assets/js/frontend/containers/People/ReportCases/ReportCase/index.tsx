import React, { useState } from "react";
import { DownCaretIcon } from "../../../../components/icons/downCaret";
import { Color } from "../../../../components/colorCodes";
import * as styled from "./styles/index";
import { ExpandedComponent } from "./expandedComponent";
import { Dropdown } from "../../../../components/Dropdown/dropdown";
import OnClickOutside from "../../../../components/OnClickOutside";
import { UpCaretIcon } from "../../../../components/icons/upCaret";

type ReportCaseProps = {
  report: MissingReport;
};

export const ReportCase = (props: ReportCaseProps) => {
  const { report } = props;
  const [expanded, setExpanded] = useState(false);

  const options = <ExpandedComponent report={report} />;

  const expandCarot = expanded ? (
    <DownCaretIcon size={16} color={Color.lightBlack} />
  ) : (
    <UpCaretIcon size={16} color={Color.lightBlack} />
  );

  return (
    <styled.ReportItemWrapper>
      <OnClickOutside onClickOutsideFn={() => setExpanded(false)}>
        <Dropdown
          displayDropdown={expanded}
          isOptionsList={false}
          options={options}
          borderTop={false}
          noGap
        >
          <styled.CaseBody
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            <styled.DateLastSeen>
              <styled.LabelContentWrapper>
                <styled.Label>DATE SEEN</styled.Label>
                <styled.Content>{report.date_last_seen}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.DateLastSeen>
            <styled.Location>
              <styled.LabelContentWrapper>
                <styled.Label>LOCATION</styled.Label>
                <styled.Content>{report.location_last_seen}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.Location>
            <styled.ExapandButtonWrapper>
              <styled.ExapandArrow>{expandCarot}</styled.ExapandArrow>
            </styled.ExapandButtonWrapper>
          </styled.CaseBody>
        </Dropdown>
        {!expanded && (
          <styled.CaseFooter>
            <styled.CaseFooterContent>Viewed 0 times</styled.CaseFooterContent>
          </styled.CaseFooter>
        )}
      </OnClickOutside>
    </styled.ReportItemWrapper>
  );
};
