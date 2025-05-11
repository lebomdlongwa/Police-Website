import React, { ChangeEvent, useEffect, useState } from "react";
import * as styled from "./styles";
import { createReport, getMail } from "../actions";
import { find, isEmpty, reject } from "lodash";
import { Button } from "../../../components/Button/button";

type MailProps = {
  selectedMailId: string;
  onCloseModal: (id: string) => void;
  onDelete: (id: string) => void;
  onReject: (id: string) => void;
  handleSetMails: (mails: Mail[]) => void;
  mails: Mail[];
  handleSetNoData: () => void;
};

export const MailModal = (props: MailProps) => {
  const {
    mails,
    selectedMailId,
    onCloseModal,
    onDelete,
    onReject,
    handleSetMails,
    handleSetNoData,
  } = props;

  // const [mail, setMail] = useState<Mail>(null);
  const [formInput, setFormInput] = useState({
    grade: "",
    officer: "",
  });
  const mail = find(mails, { id: selectedMailId });

  // useEffect(() => {
  //   const fetchMail = async () => {
  //     const response = await getMail(selectedMailId);
  //     setMail(response as Mail);
  //   };

  //   fetchMail();
  // }, []);

  const isCrimeReport = mail?.type === "crime";
  const topLeftItemLabel = isCrimeReport ? "NAME" : "DATE SEEN";
  const topLeftItemContent = isCrimeReport ? mail?.name : mail?.date_last_seen;
  const topRightItemLabel = isCrimeReport ? "SURNAME" : "LOCATION";
  const topRightContent = isCrimeReport
    ? mail?.surname
    : mail?.location_last_seen;
  const bottomLeftItemLabel = isCrimeReport
    ? "ACCUSED"
    : "CLOTHES SEEN WEARING";
  const bottomLeftItemContent = isCrimeReport
    ? mail?.accused
    : mail?.clothes_worn;
  const bottomCenterItemLabel = isCrimeReport ? "OFFICER" : "SUSPECT NAME";
  const bottomCenterItemContent = isCrimeReport ? null : mail?.known_as;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });

  const handleAcceptMail = () => {
    createReport(
      {
        id: selectedMailId,
        officer: formInput.officer,
        grade: formInput.grade,
      },
      isCrimeReport
    )
      .then(() => {
        const updatedMails = reject(mails, { id: selectedMailId });
        if (isEmpty(updatedMails)) {
          handleSetNoData();
        }

        handleSetMails(updatedMails);
      })
      .catch((err) => err);

    onCloseModal(null);
  };

  if (!isEmpty(mail)) {
    return (
      <styled.Wrapper>
        <styled.ModalContainer>
          <styled.TopBody>
            <styled.TopItemOne>
              <styled.LabelContentWrapper>
                <styled.Label>{topLeftItemLabel}</styled.Label>
                <styled.Content>{topLeftItemContent}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.TopItemOne>
            <styled.TopItemTwo>
              <styled.LabelContentWrapper>
                <styled.Label>{topRightItemLabel}</styled.Label>
                <styled.Content>{topRightContent}</styled.Content>
              </styled.LabelContentWrapper>
            </styled.TopItemTwo>
          </styled.TopBody>
          <styled.BottomBody>
            <styled.NameAndClothes isCrimeReport={isCrimeReport}>
              <styled.BottomLeftItem isCrimeReport={isCrimeReport}>
                <styled.Label>{bottomLeftItemLabel}</styled.Label>
                <styled.BottomContent>
                  {bottomLeftItemContent}
                </styled.BottomContent>
              </styled.BottomLeftItem>
              <styled.BottomCenterItem>
                <styled.Label>{bottomCenterItemLabel}</styled.Label>
                {!isCrimeReport ? (
                  <styled.BottomContent>
                    {bottomCenterItemContent}
                  </styled.BottomContent>
                ) : (
                  <styled.BottomInput
                    placeholder="Enter officer name..."
                    value={formInput.officer}
                    name="officer"
                    onChange={onChange}
                  />
                )}
              </styled.BottomCenterItem>
              {isCrimeReport && (
                <styled.BottomRightItem>
                  <styled.Label>GRADE</styled.Label>
                </styled.BottomRightItem>
              )}
            </styled.NameAndClothes>
            <styled.BriefSummary>
              <styled.Label>BRIEF SUMMARY</styled.Label>
              <styled.BottomContent>
                {mail.brief_summary || mail.brief_circumstance}
              </styled.BottomContent>
            </styled.BriefSummary>
          </styled.BottomBody>
          <styled.ButtonWrapper>
            <Button
              text={mail.rejected ? "Delete" : "Reject"}
              onClick={() => {
                onCloseModal(null);
                onReject(mail.id);
              }}
            />
            <Button text="Accept" onClick={handleAcceptMail} />
          </styled.ButtonWrapper>
        </styled.ModalContainer>
      </styled.Wrapper>
    );
  }
};
