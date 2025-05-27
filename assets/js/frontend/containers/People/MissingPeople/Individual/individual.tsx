import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import * as styled from "./styles/individual";
import { ReportButton } from "../ReportButtonModal";
import {
  FormDerfinition,
  initialFormInputObjState,
} from "./utils/formDefinition";
import { DetailRowComponent } from "./utils/groupedComponent";
import {
  addMissingPerson,
  deleteMissingPerson,
  getMissingPerson,
  updateMissingPerson,
} from "./actions";
import { useNavigate, useParams } from "react-router-dom";
import { StyledLink } from "../../../styles/app";
import { routes } from "../../../PoliceApp";
import { useUser } from "../../../userContext";
import { PeopleReportModal } from "../../ReportModal/reportModal";
import { PictureUpload } from "../../../../components/Upload/picUpload";
import { Button } from "../../../../components/Button/button";
import { CircleLoader } from "../../../../components/Spinner";
import { Color } from "../../../../components/colorCodes";

export const IndividualComponent = () => {
  const { admin, user } = useUser();
  const { id: url_id } = useParams();
  const navigate = useNavigate();
  const [showReportModal, setShowReportModal] = useState(false);
  const [upload, setUpload] = useState<UploadData | null>(null);
  const [imgLoading, setImgLoading] = useState(false);

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
    img_url: null,
  });

  const isIdValid = url_id && url_id !== ":id";
  const header = admin ? "Edit Missing Person" : "Case 076834-B";

  useEffect(() => {
    isIdValid && handleGetMissingPerson(url_id);
  }, []);

  const handleShowModal = () => setShowReportModal(!showReportModal);
  const handleImgLoading = () => setImgLoading(!imgLoading);

  const handleSetImgUrl = (url: string) => {
    setFormInputObj((prev: MissingPersonParams) => ({
      ...prev,
      img_url: url,
    }));

    setImgLoading(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInputObj({
      ...formInputObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetMissingPerson = (id: string) => {
    getMissingPerson(id)
      .then((response) => setFormInputObj({ ...response }))
      .catch((err) => err);
  };

  const handleAddMissingPerson = () => {
    addMissingPerson(formInputObj)
      .then((response) => {
        setFormInputObj({ ...response });
        navigate(routes.missing);
      })
      .catch((err) => err);
  };

  const handleUpdateMissingPerson = () => {
    updateMissingPerson(url_id, formInputObj)
      .then((response) => setFormInputObj({ ...response }))
      .catch((err) => err);
  };

  const handleDeleteMissingPerson = () => {
    deleteMissingPerson(url_id)
      .then(() => setFormInputObj(initialFormInputObjState))
      .catch((err) => err);
  };

  const addOrUpdate = () => {
    if (isIdValid) {
      handleUpdateMissingPerson();
      handleGetMissingPerson(url_id);
    } else {
      if (formInputObj?.img_url) {
        handleAddMissingPerson();
      }
    }
  };

  return (
    <styled.Wrapper>
      <styled.CaseHeader>{header}</styled.CaseHeader>
      <styled.Body>
        <styled.DetailsWrapper>
          <styled.Details admin={admin}>
            {FormDerfinition &&
              FormDerfinition.map((item) => (
                <DetailRowComponent
                  item={item}
                  onChange={onChange}
                  formInput={formInputObj}
                />
              ))}
          </styled.Details>
          <styled.RightColumn>
            <styled.PictureWrapper isAdmin={admin}>
              {admin && (
                <PictureUpload
                  handleImgLoading={handleImgLoading}
                  handleSetImgUrl={handleSetImgUrl}
                />
              )}
              <styled.PictureContent>
                {imgLoading && (
                  <styled.Loader>
                    <CircleLoader size={40} />
                  </styled.Loader>
                )}
                <styled.Picture src={formInputObj?.img_url} />
              </styled.PictureContent>
            </styled.PictureWrapper>
            <styled.ButtonsWrapper notCentered={admin && isIdValid}>
              {admin ? (
                <>
                  {isIdValid && (
                    <Button
                      text="Delete Person"
                      onClick={handleDeleteMissingPerson}
                      paddingSides={20}
                      buttonColor={Color.red}
                      buttonColorOnHover={Color.red}
                    />
                  )}
                  <Button
                    text={isIdValid ? "Edit Person" : "Upload Person"}
                    onClick={addOrUpdate}
                    paddingSides={20}
                  />
                  {isIdValid && (
                    <styled.PersonReportsWrapper>
                      <StyledLink
                        to={`${routes.missing_person_reports}/${url_id}`}
                      >
                        <styled.PersonReportsButton text="View Cases" />
                      </StyledLink>
                    </styled.PersonReportsWrapper>
                  )}
                </>
              ) : (
                <ReportButton handleShowModal={handleShowModal} />
              )}
            </styled.ButtonsWrapper>
          </styled.RightColumn>
        </styled.DetailsWrapper>

        {showReportModal && (
          <PeopleReportModal
            handleShowModal={handleShowModal}
            id={url_id}
            user={user}
          />
        )}
      </styled.Body>
    </styled.Wrapper>
  );
};
