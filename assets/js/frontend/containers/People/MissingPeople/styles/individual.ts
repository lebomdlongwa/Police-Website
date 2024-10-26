import styled from "styled-components";
import { Modal } from "../../../../components/Modal/modal";
import { Color } from "../../../../components/colorCodes";
import { Button as BaseButton } from "../../../../components/Button/button";
import { ButtonContent } from "../../../../components/Button/styles";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  padding: 20px 30px;
  background-color: ${Color.white};

  @media (max-width: 500px) {
    width: 100vw;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CaseHeader = styled.div.attrs({
  className: "CaseHeader",
})`
  height: 65px;
  padding-left: 30px;
  background-color: ${Color.lightBlue};
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
  font-size: 35px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0;
  }
`;

export const DetailsWrapper = styled.div.attrs({
  className: "DetailsWrapper",
})`
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  /* justify-content: center; */

  @media (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

export const PictureWrapper = styled.div.attrs({
  className: "PictureWrapper",
})`
  height: 30vh;
  width: 35%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Picture = styled.div.attrs({
  className: "Picture",
})`
  height: 100%;
  width: 60%;
  border: 1px solid lightgray;
  margin: auto;
`;

export const Details = styled.div.attrs({
  className: "Details",
})`
  width: 65%;
  padding-bottom: 50px;
  border-bottom: 1px solid lightgray;

  @media (max-width: 500px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const DetailRows = styled.div.attrs<{ graybackground?: boolean }>({
  className: "DetailRows",
})`
  margin-bottom: 20px;
  background-color: ${Color.grayLighter};
  height: 46px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const DetailSubjectWrapper = styled.div.attrs({
  className: "DetailSubjectWrapper",
})`
  display: flex;
`;

export const DetailSubject = styled.div.attrs({
  className: "DetailSubject",
})`
  color: ${Color.darkBlueFont};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-right: 10vw;
`;

export const DetailContent = styled.div.attrs({
  className: "DetailContent",
})`
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
`;

export const ReportPersonWrapper = styled.div.attrs({
  className: "ReportPersonWrapper",
})`
  width: 590px;
  height: 164px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    width: 340px;
    height: 165px;
  }

  @media (max-width: 330px) {
    width: 260px;
    height: 210px;
  }
`;

export const ReportPersonHeader = styled.div.attrs({
  className: "ReportPersonHeader",
})`
  background-color: ${Color.navyBlueLighter};
  height: 32%;
  width: 100%;
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 330px) {
    font-size: 20px;
    height: 28%;
  }
`;

export const ReportPersonBody = styled.div.attrs({
  className: "ReportPersonBody",
})`
  background-color: ${Color.blue};
  height: 68%;
  width: 100%;
  padding: 20px;
  flex-grow: 1;

  @media (max-width: 330px) {
    height: 72%;
  }
`;

export const ReportPersonButton = styled.div.attrs({
  className: "ReportPersonButton",
})`
  color: ${Color.darkBlueFont};
  background-color: ${Color.lightBlue};
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${Color.navyBlueLighter};
    transition: all 0.3s ease;
    color: ${Color.white};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;

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

export const CallPolice = styled.div.attrs({
  className: "CallPolice",
})`
  background-color: #073676;
  width: 25vw;
  height: 30vh;
`;
