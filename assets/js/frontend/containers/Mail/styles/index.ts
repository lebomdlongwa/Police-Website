import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  height: 100vh;
`;

export const BackgroundPic = styled.div.attrs({
  className: "BackgroundPic",
})`
  width: 100%;
  height: 100%;
  background-image: url("../../../images/police_classic.jpg");
  background-size: cover;
  background-position: center;
  padding-bottom: 20px;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div.attrs({
  className: "ContentWrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div.attrs({
  className: "Header",
})`
  width: 100%;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MailsContainer = styled.div.attrs({
  className: "MailsContainer",
})`
  background-color: rgba(255, 255, 255, 0.8);
  width: 90%;
  min-width: 930px;
  height: 90%;
  margin: auto;
  border-radius: 15px;
`;

export const MailsHeader = styled.div.attrs({
  className: "MailsHeader",
})`
  width: 100%;
  height: 50px;
`;

export const TabsWrapper = styled.div.attrs({
  className: "TabsWrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Tab = styled.div.attrs<{ active: boolean }>({
  className: "Tab",
})`
  width: 250px;
  padding-left: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${Color.gray};
  gap: 15px;

  // Change when zesa comes back

  &:first-child {
    border-bottom: ${({ active }) =>
      active ? `4px solid ${Color.darkBlue}` : "none"};
  }
`;

export const TabLabel = styled.div.attrs({
  className: "TabLabel",
})`
  width: 100%;
  height: 100%;
  color: ${Color.lightBlack};
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const Notification = styled.div.attrs({
  className: "Notification",
})`
  width: 100%;
  height: 100%;
`;

export const MailsWrapper = styled.div.attrs({
  className: "MailsWrapper",
})`
  background-color: rgba(168, 161, 161, 0.3);
  width: 100%;
  height: 89%;
  overflow-y: scroll;
`;
