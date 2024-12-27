import React, { useState } from "react";
import * as styled from "./styles";

type ReportModalProps = {
  handleShowModal: VoidCallBack;
};

export const ReportModal = (props: ReportModalProps) => {
  const { handleShowModal } = props;
  const [reportList, setReportList] = useState([]);

  return (
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
        <styled.Button text="Cancel" onClick={handleShowModal}></styled.Button>
        <styled.Button text="Save"></styled.Button>
      </styled.ButtonsWrapper>
    </styled.ReportModal>
  );
};
