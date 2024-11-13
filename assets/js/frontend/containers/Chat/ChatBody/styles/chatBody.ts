import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { Button as ButtonBase } from "../../../../components/Button/button";

export const ChatBodyWrapper = styled.div.attrs({
  className: "ChatBodyWrapper",
})`
  width: 50%;
  height: 100%;
`;

export const Header = styled.div.attrs({
  className: "Header",
})`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${Color.grayLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  position: relative;
`;

export const HeaderOptions = styled.div.attrs({
  className: "HeaderOptions",
})`
  position: absolute;
  right: 15px;
`;

export const MessagesBody = styled.div.attrs({
  className: "MessagesBody",
})`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 30px;
`;

export const Chats = styled.div.attrs({
  className: "Chats",
})`
  width: 100%;
  height: 80%;
`;

export const MessageBoxWrapper = styled.div.attrs({
  className: "MessageBoxWrapper",
})`
  width: 100%;
  height: 20%;
  border: 2px solid ${Color.grayLighter};
  border-radius: 4px;
  position: relative;
`;

export const MessageBox = styled.textarea.attrs({
  className: "MessageBox",
})`
  border: none;
  width: 100%;
  height: 70%;
  resize: none;
  color: ${Color.darkBlueFont};
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div.attrs({
  className: "ButtonWrapper",
})`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  padding-bottom: 2px;
`;

export const AttachFile = styled.div.attrs({
  className: "AttachFile",
})``;

export const SendButton = styled.div.attrs({
  className: "SendButton",
})``;
