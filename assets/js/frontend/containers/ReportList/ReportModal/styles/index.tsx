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

export const FormWrapper = styled.div.attrs({
  className: "FormWrapper",
})`
  width: 80%;
  margin: 0 auto;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.div.attrs({
  className: "InputLabel",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${Color.white};
  font-size: 18px;
  margin-bottom: 5px;
`;

export const FormInput = styled.input.attrs<{ width?: number }>({
  className: "FormInput",
  type: "text",
})`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: ${Color.darkBlueFont};
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export const Fullname = styled.div.attrs({
  className: "Fullname",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const OfficerGradeWrapper = styled.div.attrs({
  className: "OfficerGradeWrapper",
})`
  width: 100%;
  display: flex;
  justify-content: center;
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
  width: 60px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SuspectName = styled.div.attrs({
  className: "SuspectName",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

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
  padding: 10px;
  resize: vertical;
  border: none;
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
  padding: 0 30px;
  color: ${Color.white};
  height: 8vh;
  display: flex;
  justify-content: space-between;
`;
