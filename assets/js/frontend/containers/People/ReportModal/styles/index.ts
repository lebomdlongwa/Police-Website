import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { Modal } from "../../../../components/Modal/modal";
import { Button as BaseButton } from "../../../../components/Button/button";
import { ButtonContent } from "../../../../components/Button/styles";

export const ReportModal = styled(Modal).attrs({
  className: "ReportModal",
})``;

export const ReportModalContent = styled.div.attrs({
  className: "ReportModalContent",
})`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Reporter = styled.div.attrs({
  className: "Reporter",
})`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 16%;
  width: 100%;
`;

export const Name = styled.div.attrs({
  className: "Name",
})`
  height: 100%;
  width: 50%;
  border: 1px solid lightgray;
`;

export const Surname = styled.div.attrs({
  className: "Surname",
})`
  height: 100%;
  width: 50%;
  border: 1px solid lightgray;
`;

export const Contacts = styled.div.attrs({
  className: "Contacts",
})`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 16%;
  width: 100%;
`;

export const Email = styled.div.attrs({
  className: "Email",
})`
  height: 100%;
  width: 100%;
  border: 1px solid lightgray;
`;

export const PhoneNumber = styled.div.attrs({
  className: "PhoneNumber",
})`
  height: 100%;
  width: 100%;
  border: 1px solid lightgray;
`;

export const LastSeen = styled.div.attrs({
  className: "LastSeen",
})`
  height: 16%;
  width: 100%;
  border: 1px solid lightgray;
`;

export const AdditionalInfo = styled.div.attrs({
  className: "AdditionalInfo",
})`
  height: 39%;
  width: 100%;
  border: 1px solid lightgray;
`;

export const ButtonsWrapper = styled.div.attrs({
  className: "ButtonsWrapper",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  ${ButtonContent} {
    background-color: ${Color.darkBlue};
  }
`;

export const Button = styled(BaseButton).attrs({
  className: "Button",
})`
  background-color: ${Color.darkBlue};
  border-radius: 4px;

  ${ButtonContent} {
    &:hover {
      background-color: ${Color.blue};
      transition: 0.3s ease;
    }
  }
`;
