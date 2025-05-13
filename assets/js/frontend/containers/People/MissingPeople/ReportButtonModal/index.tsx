import React from "react";
import * as styled from "./styles";

type ReportButtonProps = {
  handleShowModal: VoidCallBack;
};

export const ReportButton = (props: ReportButtonProps) => {
  const { handleShowModal } = props;
  return (
    <styled.ReportPersonWrapper>
      <styled.ReportPersonHeader>
        Do you know this person?
      </styled.ReportPersonHeader>
      <styled.ReportPersonButton onClick={handleShowModal}>
        YES I DO
      </styled.ReportPersonButton>
    </styled.ReportPersonWrapper>
  );
};
