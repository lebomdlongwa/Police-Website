import styled from "styled-components";

export const ModalContainer = styled.div.attrs({
  className: "ModalContainer",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 3001;
`;

export const Modal = styled.div.attrs<{
  modalHeight: number;
  modalWidth: number;
  backgroundColor: string;
}>({
  className: "Modal",
})`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 2000px rgba(0, 0, 0, 0.5);
  width: ${({ modalWidth }) => (modalWidth ? `${modalWidth}%` : "50%")};
  height: ${({ modalHeight }) => (modalHeight ? `${modalHeight}%` : "80%")};
  max-height: 95vh;
  overflow-y: auto;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    max-height: calc(100% - 40px);
    width: 90%;
  }
`;
