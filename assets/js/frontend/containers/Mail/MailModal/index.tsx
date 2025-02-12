import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { createReport, getMail } from "../actions";
import { isEmpty } from "lodash";
import { Button } from "../../../components/Button/button";

type MailProps = {
  selectedMailId: string;
  onCloseModal: (id: string) => void;
  onDelete: (id: string) => void;
};

export const MailModal = (props: MailProps) => {
  const { selectedMailId, onCloseModal, onDelete } = props;

  const [mail, setMail] = useState<Mail>(null);

  useEffect(() => {
    const fetchMail = async () => {
      const response = await getMail(selectedMailId);
      setMail(response as Mail);
    };

    fetchMail();
  }, []);

  const handleAcceptMail = () => {
    createReport(selectedMailId);
    onCloseModal(null);
  };

  if (!isEmpty(mail)) {
    return (
      <styled.Wrapper>
        <styled.ModalContainer>
          <styled.TopBody>
            <styled.DateLastSeen>
              <styled.LabelContentWrapper>
                <styled.Label>DATE SEEN</styled.Label>
                <styled.Content>{mail.date_last_seen}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.DateLastSeen>
            <styled.Location>
              <styled.LabelContentWrapper>
                <styled.Label>LOCATION</styled.Label>
                <styled.Content>{mail.location_last_seen}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.Location>
          </styled.TopBody>
          <styled.BottomBody>
            <styled.NameAndClothes>
              <styled.ClothesWrapper>
                <styled.Label>CLOTHES SEEN WEARING</styled.Label>
                <styled.BottomContent>{mail.clothes_worn}</styled.BottomContent>
              </styled.ClothesWrapper>
              <styled.NameWrapper>
                <styled.Label>NAME KNOWN AS</styled.Label>
                <styled.BottomContent>{mail.known_as}</styled.BottomContent>
              </styled.NameWrapper>
            </styled.NameAndClothes>
            <styled.BriefSummary>
              <styled.Label>BRIEF SUMMARY</styled.Label>
              <styled.BottomContent>{mail.brief_summary}</styled.BottomContent>
            </styled.BriefSummary>
          </styled.BottomBody>
          <styled.ButtonWrapper>
            <Button text="Reject" onClick={() => onCloseModal(null)} />
            <Button text="Accept" onClick={handleAcceptMail} />
          </styled.ButtonWrapper>
        </styled.ModalContainer>
      </styled.Wrapper>
    );
  }
};
