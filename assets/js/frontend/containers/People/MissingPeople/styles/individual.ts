import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { Button } from "../../../../components/Button/button";

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

export const DoubleDetailRowWrapper = styled.div.attrs<{
  graybackground?: boolean;
}>({
  className: "DoubleDetailRowWrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DoubleDetailRow = styled.div.attrs<{ graybackground?: boolean }>({
  className: "DoubleDetailRow",
})`
  width: 49%;
`;

export const DetailRows = styled.div.attrs<{ graybackground?: boolean }>({
  className: "DetailRows",
})`
  width: 100%;
  margin-bottom: 20px;
  background-color: ${Color.grayLighter};
  height: 46px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const SubjectContentWrapper = styled.div.attrs({
  className: "SubjectContentWrapper",
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DetailSubject = styled.div.attrs({
  className: "DetailSubject",
})`
  height: 100%;
  color: ${Color.darkBlueFont};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 250px;
`;

export const DetailContent = styled.input.attrs({
  className: "DetailContent",
  type: "text",
})`
  height: 40px;
  width: 100%;
  background-color: ${Color.grayLighter};
  color: ${Color.darkBlueFont};
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  font-size: 16px;
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

export const CallPolice = styled.div.attrs({
  className: "CallPolice",
})`
  background-color: #073676;
  width: 25vw;
  height: 30vh;
`;

export const Footer = styled.div.attrs({
  className: "Footer",
})`
  position: fixed;
  padding: 30px 50px;
  bottom: 0;
  left: 60px;
  width: 100%;
  height: 60px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  background-color: ${Color.chalk};
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Color.navyBlue};
  font-size: 20px;
`;

export const FooterButtonsWrapper = styled.div.attrs({
  className: "FooterButtonsWrapper",
})`
  display: flex;
  width: 200px;
  gap: 10px;
`;

export const FooterButton = styled(Button).attrs({
  className: "FooterButton",
})`
  width: 80px;
  height: 30px;
`;
