import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import * as styled from "./styles/individual";
import { ReportButton } from "../ReportButtonModal";
import { FormDerfinition } from "./utils/formDefinition";
import {
  DetailRowComponent,
  DoubleDetailRowComponent,
} from "./utils/groupedComponent";
import {
  addMissingPerson,
  deleteMissingPerson,
  getMissingPerson,
  updateMissingPerson,
} from "./actions";
import { Link, useLocation, useParams } from "react-router-dom";
import { StyledLink } from "../../../styles/app";
import { routes } from "../../../PoliceApp";
import { useUser } from "../../../userContext";
import { PeopleReportModal } from "../../ReportModal/reportModal";

export const IndividualComponent = () => {
  const location = useLocation();
  const { id: url_id } = useParams();
  const [showReportModal, setShowReportModal] = useState(false);
  const [formInputObj, setFormInputObj] = useState<MissingPersonParams>({
    fullname: "",
    age: "",
    last_seen: "",
    last_place_seen: "",
    clothes: "",
    height: "",
    weight: "",
    //should make dropdown to choose between "thin" | "medium" | "fat"
    body_stature: "medium",
    skin_colour: "",
    id: null,
  });
  const [baseFormObj, setBaseFormObj] =
    useState<MissingPersonParams>(formInputObj);
  const { admin } = useUser();

  const isIdValid = url_id && url_id !== ":id";
  const header = isIdValid ? "Edit Missing Person" : "Case 076834-B";
  const showSaveFooter = formInputObj != baseFormObj;

  useEffect(() => {
    isIdValid && handleGetMissingPerson(url_id);
    setBaseFormObj(formInputObj);
  }, []);

  const handleShowModal = () => setShowReportModal(!showReportModal);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInputObj({
      ...formInputObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetMissingPerson = async (id: string) => {
    const response = await getMissingPerson(id);
    setFormInputObj({ ...response });
    setBaseFormObj({ ...response });
  };

  const handleAddMissingPerson = async () => {
    const response = await addMissingPerson(formInputObj);
  };

  const handleUpdateMissingPerson = async () => {
    const response = await updateMissingPerson(url_id, formInputObj);
    setFormInputObj({ ...response });
  };

  const handleDeleteMissingPerson = async () => {
    const response = await deleteMissingPerson(url_id);
  };

  const addOrUpdate = () => {
    if (isIdValid) {
      handleUpdateMissingPerson();
    } else {
      handleAddMissingPerson();
    }
  };

  return (
    <styled.Wrapper>
      <styled.CaseHeader>{header}</styled.CaseHeader>
      <styled.DetailsWrapper>
        <styled.Details admin={admin}>
          {FormDerfinition &&
            FormDerfinition.slice(0, 5).map((item) => (
              <DetailRowComponent
                item={item}
                onChange={onChange}
                formInput={formInputObj}
              />
            ))}
          <styled.DoubleDetailRowWrapper>
            {FormDerfinition &&
              FormDerfinition.slice(5, 7).map((item) => (
                <DoubleDetailRowComponent
                  item={item}
                  onChange={onChange}
                  formInput={formInputObj}
                />
              ))}
          </styled.DoubleDetailRowWrapper>
          <styled.DoubleDetailRowWrapper>
            {FormDerfinition &&
              FormDerfinition.slice(7, 9).map((item) => (
                <DoubleDetailRowComponent
                  item={item}
                  onChange={onChange}
                  formInput={formInputObj}
                />
              ))}
          </styled.DoubleDetailRowWrapper>
        </styled.Details>
        <styled.PictureWrapper>
          <styled.Picture></styled.Picture>
          {/* {admin && ( */}
          {
            <styled.PersonReportsWrapper>
              <StyledLink to={`${routes.missing_person_reports}/${url_id}`}>
                <styled.PersonReportsButton text="View Reported Cases" />
              </StyledLink>
            </styled.PersonReportsWrapper>
          }
        </styled.PictureWrapper>
      </styled.DetailsWrapper>
      {/* {isIdValid && !admin && (  */}
      {isIdValid && <ReportButton handleShowModal={handleShowModal} />}
      {showReportModal && (
        <PeopleReportModal handleShowModal={handleShowModal} id={url_id} />
      )}
      {!showSaveFooter && admin && (
        <styled.Footer>
          You have made some changes
          <styled.FooterButtonsWrapper>
            <styled.FooterButton text="Cancel" />
            <StyledLink to={routes.missing}>
              <styled.FooterButton text="Save" onClick={addOrUpdate} />
            </StyledLink>
          </styled.FooterButtonsWrapper>
        </styled.Footer>
      )}
    </styled.Wrapper>
  );
};
