import styled from "styled-components";
import { Modal } from "../../Modal/modal";
import { Color } from "../../colorCodes";

export const Wrapper = styled(Modal).attrs({
  className: "Wrapper",
})``;

export const ContentWrapper = styled.div.attrs({
  className: "ContentWrapper",
})`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Header = styled.div.attrs({
  className: "Header",
})`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 25px;
  font-weight: 800;
  color: ${Color.darkBlueFont};
`;

export const Body = styled.div.attrs({
  className: "Body",
})`
  width: 100%;
  height: 97px;
  border-bottom: 1px solid ${Color.lightgray};
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${Color.lightBlack};
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div.attrs({
  className: "ButtonsWrapper",
})`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;
