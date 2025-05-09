import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { Modal } from "../../../../components/Modal/modal";

export const ReportModalWrapper = styled(Modal).attrs({
  className: "ReportModalWrapper",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ShadowContainer = styled.div.attrs({
  className: "ShadowContainer",
})`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 30px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormWrapper = styled.div.attrs({
  className: "FormWrapper",
})`
  width: 100%;
  margin: 0 auto;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.div.attrs({
  className: "InputLabel",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${Color.black};
  font-size: 18px;
  margin-bottom: 5px;
`;

export const FormInput = styled.input.attrs<{ width?: number }>({
  className: "FormInput",
  type: "text",
})`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  padding: 10px;
  border-radius: 4px;
  color: ${Color.darkBlueFont};
  font-size: 15px;
  border: 1px solid ${Color.lightgray};

  &:focus {
    outline: none;
  }
`;

export const ReporterDetails = styled.div.attrs({
  className: "ReporterDetails",
})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const SuspectAndCrimeType = styled(ReporterDetails).attrs({
  className: "SuspectAndCrimeType",
})``;

export const Name = styled.div.attrs({
  className: "Name",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Surname = styled(Name).attrs({
  className: "Surname",
})``;

export const OfficerGradeWrapper = styled.div.attrs({
  className: "OfficerGradeWrapper",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Officer = styled.div.attrs({
  className: "Officer",
})`
  width: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grade = styled.div.attrs({
  className: "Grade",
})`
  width: 50px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SuspectName = styled(Name).attrs({
  className: "SuspectName",
})``;

export const CrimeType = styled(SuspectName).attrs({
  className: "CrimeType",
})``;

export const BriefCircumstance = styled.div.attrs({
  className: "BriefCircumstance",
})`
  min-width: 200px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const BriefCircumstanceInput = styled.textarea.attrs({
  className: "BriefCircumstanceInput",
})`
  width: 100%;
  height: 100%;
  border: 1px solid ${Color.lightgray};
  padding: 10px;
  resize: vertical;
  border-radius: 4px;
  color: ${Color.darkBlueFont};
  font-size: 17px;

  &:focus {
    outline: none;
  }
`;

export const ModalButtonWrapper = styled.div.attrs({
  className: "ModalButtonWrapper",
})`
  width: 100%;
  color: ${Color.white};
  height: 8vh;
  display: flex;
  justify-content: space-between;
`;
