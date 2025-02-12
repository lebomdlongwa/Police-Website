import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const ChatBodyWrapper = styled.div.attrs({
  className: "ChatBodyWrapper",
})`
  width: 50%;
  flex: 1;
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
  height: calc(100% - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Chats = styled.div.attrs({
  className: "Chats",
})`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 10px;
`;

export const MessageBoxContainer = styled.div.attrs({
  className: "MessageBoxContainer",
})`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: ${Color.chalk};
`;

export const MessageBoxWrapper = styled.div.attrs({
  className: "MessageBoxWrapper",
})`
  width: 100%;
  height: 120px;
  border: 2px solid ${Color.grayLighter};
  border-radius: 4px;
  position: relative;
  background-color: ${Color.white};
`;

export const MessageBox = styled.textarea.attrs({
  className: "MessageBox",
})`
  border: none;
  width: 100%;
  height: 60%;
  resize: none;
  color: ${Color.darkBlueFont};
  padding: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div.attrs({
  className: "ButtonWrapper",
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: ${Color.white};
`;

export const AttachFile = styled.div.attrs({
  className: "AttachFile",
})``;

export const SendButton = styled.div.attrs({
  className: "SendButton",
})`
  width: 30px;
  height: 30px;
  // padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${Color.grayLighter};
    transition: 0.3s ease-in;
  }
`;
