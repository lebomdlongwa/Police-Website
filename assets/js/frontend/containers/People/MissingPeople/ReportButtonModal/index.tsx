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
        I may know this person
      </styled.ReportPersonHeader>
      <styled.ReportPersonBody>
        <styled.ReportPersonButton onClick={handleShowModal}>
          If you have any information about this person you can click here to
          report. Your Report will be very helpful
        </styled.ReportPersonButton>
      </styled.ReportPersonBody>
    </styled.ReportPersonWrapper>
  );
};
