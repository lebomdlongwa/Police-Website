import React, { useState } from "react";
import * as styled from "./styles/individual";

export const Individual = () => {
  const [showReporterModal, setShowReporterModal] = useState(false);

  const handleShowModal = () => setShowReporterModal(!showReporterModal);

  return (
    <styled.Wrapper>
      <styled.CaseHeader>Case 076834-B</styled.CaseHeader>
      <styled.DetailsWrapper>
        <styled.Details>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
          <styled.DetailRows>{/* {SubjectAndContent()} */}</styled.DetailRows>
        </styled.Details>
        <styled.PictureWrapper>
          <styled.Picture></styled.Picture>
        </styled.PictureWrapper>
      </styled.DetailsWrapper>
      <styled.ReportPersonWrapper>
        <styled.ReportPersonHeader>
          I may know this person
        </styled.ReportPersonHeader>
        <styled.ReportPersonBody>
          <styled.ReportPersonButton onClick={handleShowModal}>
            If you have any information about this person you can click here to
            report. Your Report will be very helpful
          </styled.ReportPersonButton>
        </styled.ReportPersonBody>
      </styled.ReportPersonWrapper>
      {showReporterModal && (
        <styled.ReportModal>
          <styled.ReportModalContent>
            <styled.Reporter>
              <styled.Name></styled.Name>
              <styled.Surname></styled.Surname>
            </styled.Reporter>
            <styled.Contacts>
              <styled.Email></styled.Email>
              <styled.PhoneNumber></styled.PhoneNumber>
            </styled.Contacts>
            <styled.LastSeen></styled.LastSeen>
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
    </styled.Wrapper>
  );
};
