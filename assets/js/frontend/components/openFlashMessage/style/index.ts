import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 320px;
  height: 75px;
  background-color: green;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  padding: 15px 20px;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

export const MessageBody = styled.div.attrs({
  className: "MessageBody",
})`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
