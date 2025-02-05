import React from "react";
import * as styled from "./styles";
import { Button } from "../Button/button";
import { Color } from "../colorCodes";

type DeleteModalProps = {
  onCloseModal: VoidCallBack;
  onDelete: () => Promise<void>;
};

export const DeleteModal = (props: DeleteModalProps) => {
  const { onCloseModal, onDelete } = props;

  const handleDeleteItem = () => {
    onDelete();
    onCloseModal();
  };

  return (
    <styled.Wrapper width={40} height={40}>
      <styled.ContentWrapper>
        <styled.Header>Delete Id item</styled.Header>
        <styled.Body>
          <styled.Content>
            Are you sure you want to delete the Id
          </styled.Content>
          <styled.Content>
            Please Note: Once deleted it is not recoverable
          </styled.Content>
        </styled.Body>
        <styled.ButtonsWrapper>
          <Button
            text="Cancel"
            borderColor={Color.gray}
            buttonColor={Color.white}
            fontColor={Color.gray}
            onClick={onCloseModal}
          />
          <Button text="Delete Id" onClick={handleDeleteItem} />
        </styled.ButtonsWrapper>
      </styled.ContentWrapper>
    </styled.Wrapper>
  );
};
