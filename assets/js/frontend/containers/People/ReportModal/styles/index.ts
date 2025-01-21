import styled from "styled-components";
import { Modal } from "../../../../components/Modal/modal";
import { Color } from "../../../../components/colorCodes";

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
  color: ${Color.black};
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${Color.lightgray};

  &:focus {
    outline: none;
  }
`;

export const DateAndPlaceContainer = styled.div.attrs({
  className: "DateAndPlaceWrapper",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div.attrs({
  className: "DateWrapper",
})`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Place = styled(DateWrapper).attrs({
  className: "Surname",
})``;

export const SuspectName = styled(DateWrapper).attrs({
  className: "SuspectName",
})`
  width: 100%;
`;

export const Clothes = styled(SuspectName).attrs({
  className: "Clothes",
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
  font-size: 17px;
  color: ${Color.black};
  font-weight: 600;

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
