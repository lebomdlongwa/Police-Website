import React from "react";
import * as styled from "./styles/expanded";

type ExpandedComponentProps = {
  report: MissingReport;
};

export const ExpandedComponent = (props: ExpandedComponentProps) => {
  const { report } = props;
  return (
    <styled.DropdownWrapper>
      <styled.NameAndClothes>
        <styled.ClothesWrapper>
          <styled.DropdownLabel>CLOTHES SEEN WEARING</styled.DropdownLabel>
          <styled.DropdownContent>{report.clothes_worn}</styled.DropdownContent>
        </styled.ClothesWrapper>
        <styled.NameWrapper>
          <styled.DropdownLabel>NAME KNOWN AS</styled.DropdownLabel>
          <styled.DropdownContent style={{ fontSize: "18px" }}>
            {report.known_as}
          </styled.DropdownContent>
        </styled.NameWrapper>
      </styled.NameAndClothes>
      <styled.BriefSummary>
        <styled.DropdownLabel>BRIEF SUMMARY</styled.DropdownLabel>
        <styled.DropdownContent>{report.brief_summary}</styled.DropdownContent>
      </styled.BriefSummary>
      <styled.CaseFooter>
        <styled.CaseFooterContent>Viewed 0 times</styled.CaseFooterContent>
      </styled.CaseFooter>
    </styled.DropdownWrapper>
  );
};
