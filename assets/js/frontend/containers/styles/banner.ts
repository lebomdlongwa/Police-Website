import styled from "styled-components";
import { Color } from "../../components/colorCodes";
import { Modal } from "../../components/Modal/modal";
import { NavWrapper } from "../NavBar/style";
import { ButtonContent } from "../../components/Button/styles";
import { Button as BaseButton } from "../../components/Button/button";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  min-height: 100vh;
  background-color: ${Color.darkBlue};
  color: black;
  position: relative;
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const LinksWrapper = styled.div.attrs({
  className: "LinksWrapper",
})`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 30px;
  padding: 0 30px;
  z-index: 10;
`;

export const Links = styled.div.attrs({
  className: "Links",
})`
  font-size: 23px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
    cursor: pointer;
  }
`;

export const ReportModal = styled(Modal).attrs({
  className: "ReportModal",
})``;

export const ReportModalContent = styled.div.attrs({
  className: "ReportModalContent",
})`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReporterWrapper = styled.div.attrs({
  className: "ReporterWrapper",
})`
  display: flex;
  align-items: center;
  flex-grow: 1;
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

export const ContactsWrapper = styled.div.attrs({
  className: "ContactsWrapper",
})`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-top: 20px;
  width: 100%;
`;

export const Email = styled.div.attrs({
  className: "Email",
})`
  height: 100%;
  width: 50%;
  border: 1px solid lightgray;
`;

export const PhoneNumber = styled.div.attrs({
  className: "PhoneNumber",
})`
  height: 100%;
  width: 50%;
  border: 1px solid lightgray;
`;

export const CrimeDetailsWrapper = styled.div.attrs({
  className: "CrimeDetailsWrapper",
})`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export const CrimeDate = styled.div.attrs({
  className: "CrimeDate",
})`
  width: 50%;
  height: 100%;
  border: 1px solid lightgray;
`;

export const TypeOfCrime = styled.div.attrs({
  className: "TypeOfCrime",
})`
  width: 50%;
  height: 100%;
  border: 1px solid lightgray;
`;

export const AdditionalInfo = styled.div.attrs({
  className: "AdditionalInfo",
})`
  margin-top: 20px;
  height: 30%;
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
