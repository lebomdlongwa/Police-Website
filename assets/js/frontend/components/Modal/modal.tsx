import React, { ReactNode } from "react";
import * as styled from "./styles";

type ModalProps = {
  children: ReactNode;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  const { children } = props;

  return (
    <styled.ModalContainer>
      <styled.Modal>{children}</styled.Modal>
    </styled.ModalContainer>
  );
};
