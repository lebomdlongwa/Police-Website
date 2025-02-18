import React from "react";
import * as styled from "./styles/mailComponent";

type MailComponentProps = {
  mail: Mail;
  onClick: VoidCallBack;
};

export const MailComponent = (props: MailComponentProps) => {
  const { mail } = props;

  return (
    <styled.Wrapper {...props}>
      <styled.Sender>
        {mail.name} {mail.surname}
      </styled.Sender>
      <styled.BriefSummary>
        {mail.brief_summary || mail.brief_circumstance}
      </styled.BriefSummary>
      <styled.TimeStamp>{mail.timestamp}</styled.TimeStamp>
    </styled.Wrapper>
  );
};
