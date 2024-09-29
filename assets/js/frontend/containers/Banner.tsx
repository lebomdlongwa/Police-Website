import React, { useState } from "react";
import * as styled from "./styles/banner";
import { Modal } from "../components/Modal/modal";

type EventProps = "report" | "missing" | "wanted";

const Banner = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  const handleShowModal = () => setShowReportModal(!showReportModal);

  const handleScrollEvent = (event: EventProps) => {
    if (event === "report") {
      const scrollEvent = new Event("reportScrollEvent");
      document.dispatchEvent(scrollEvent);
    } else if (event === "missing") {
      const scrollEvent = new Event("missingScrollEvent");
      document.dispatchEvent(scrollEvent);
    } else {
      const scrollEvent = new Event("wantedScrollEvent");
      document.dispatchEvent(scrollEvent);
    }
  };

  return (
    <styled.Wrapper>
      <styled.LinksWrapper>
        <styled.Links onClick={handleShowModal}>Report Crime</styled.Links>
        {showReportModal && (
          <styled.ReportModal>
            <styled.ReportModalContent>
              <styled.ReporterWrapper>
                <styled.Name></styled.Name>
                <styled.Surname></styled.Surname>
              </styled.ReporterWrapper>
              <styled.ContactsWrapper>
                <styled.Email></styled.Email>
                <styled.PhoneNumber></styled.PhoneNumber>
              </styled.ContactsWrapper>
              <styled.CrimeDetailsWrapper>
                <styled.CrimeDate></styled.CrimeDate>
                <styled.TypeOfCrime></styled.TypeOfCrime>
              </styled.CrimeDetailsWrapper>
              <styled.AdditionalInfo></styled.AdditionalInfo>
            </styled.ReportModalContent>
            <styled.ButtonsWrapper>
              <styled.Button
                text="Cancel"
                onClick={handleShowModal}
              ></styled.Button>
              <styled.Button text="Save"></styled.Button>
            </styled.ButtonsWrapper>
          </styled.ReportModal>
        )}
        <styled.Links onClick={() => handleScrollEvent("missing")}>
          View Missing People
        </styled.Links>
        <styled.Links onClick={() => handleScrollEvent("wanted")}>
          View Wanted People
        </styled.Links>
      </styled.LinksWrapper>
    </styled.Wrapper>
  );
};

export default Banner;
