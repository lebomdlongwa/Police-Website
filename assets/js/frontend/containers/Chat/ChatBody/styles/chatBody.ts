import styled, { css } from "styled-components";
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

export const MessagesBody = styled.div.attrs<{ isMessagesValid: boolean }>({
  className: "MessagesBody",
})`
  width: 100%;
  height: calc(100% - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isMessagesValid }) =>
    isMessagesValid &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Chats = styled.div.attrs({
  className: "Chats",
})`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 5px 10px 0 10px;
`;

export const MessageBoxContainer = styled.div.attrs({
  className: "MessageBoxContainer",
})`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const MessageBoxWrapper = styled.div.attrs({
  className: "MessageBoxWrapper",
})`
  width: 84%;
  height: 100%;
`;

export const MessageBox = styled.textarea.attrs({
  className: "MessageBox",
})`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${Color.grayLighter};
  border-radius: 8px;
  vertical-align: middle;
  padding: 16px 20px 0 20px;
  resize: none;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  color: ${Color.black};
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div.attrs({
  className: "ButtonWrapper",
})`
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AttachFile = styled.div.attrs({
  className: "AttachFile",
})``;

export const SendButton = styled.div.attrs({
  className: "SendButton",
})`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.3s ease-in;
  }
`;
