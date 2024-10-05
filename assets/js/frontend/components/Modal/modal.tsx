import React, { ReactNode } from "react";
import * as styled from "./styles";

type ModalProps = {
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
};

export const Modal = (props: ModalProps) => {
  const { children, height, width, backgroundColor } = props;

  return (
    <styled.ModalContainer>
      <styled.Modal
        modalHeight={height}
        modalWidth={width}
        backgroundColor={backgroundColor}
      >
        {children}
      </styled.Modal>
    </styled.ModalContainer>
  );
};
