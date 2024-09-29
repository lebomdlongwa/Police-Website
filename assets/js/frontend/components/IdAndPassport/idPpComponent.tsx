import React, { useState } from "react";
import * as styled from "./styles/idPpComponent";
import { CalendarIcon } from "../icons/calendar";
import { EditIcon } from "../icons/edit";
import { IdIcon } from "../icons/id_card";
import { TrashIcon } from "../icons/trash";
import { deleteId } from "./actions";
import AddFormComponent from "../AddForm/addForm";

type IdPpComponentProps = {
  item: IdItem;
  handleShowAddForm: VoidCallBack;
  showAddForm: boolean;
  setIdList: (list: IdItem[]) => void;
  // setEdit: VoidCallBack;
  // edit: boolean;
};

export const IdPpComponent = (props: IdPpComponentProps) => {
  const { item, handleShowAddForm, showAddForm, setIdList } = props;

  const [edit, setEdit] = useState(false);
  const handleSetEdit = () => setEdit(!edit);

  const handleDeleteItem = async () => {
    const response = await deleteId(item.id);
    setIdList(response);
  };

  return (
    <styled.IdPpWrapper>
      <styled.ItemContainer>
        <styled.ItemWrapper>
          <styled.Item>
            <styled.ItemContent>
              <styled.FullName>
                <styled.Content>{item.fullname}</styled.Content>
              </styled.FullName>
              <styled.IdNumber>
                <styled.Icon>
                  <IdIcon h={22} w={22} />
                  <styled.IconLabel>ID NUMBER</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{item.idNumber}</styled.Content>
              </styled.IdNumber>
              <styled.DateLost>
                <styled.Icon>
                  <CalendarIcon />
                  <styled.IconLabel>DATE ADDED</styled.IconLabel>
                </styled.Icon>
                <styled.Content>{item.id}</styled.Content>
              </styled.DateLost>
            </styled.ItemContent>
          </styled.Item>
          <styled.ButtonsWrapper>
            <styled.Button
              onClick={() => {
                handleSetEdit();
                handleShowAddForm();
              }}
            >
              <styled.ButtonIcon>
                <EditIcon h={24} w={24} />
              </styled.ButtonIcon>
            </styled.Button>
            <styled.ButtonDivider />
            <styled.Button onClick={() => handleDeleteItem()}>
              <styled.ButtonIcon>
                <TrashIcon h={20} w={20} />
              </styled.ButtonIcon>
            </styled.Button>
          </styled.ButtonsWrapper>
        </styled.ItemWrapper>
      </styled.ItemContainer>
      {showAddForm && (
        <AddFormComponent
          handleShowAddForm={handleShowAddForm}
          showAddForm={showAddForm}
          setIdList={setIdList}
          item={item}
          setEdit={handleSetEdit}
          edit={edit}
        />
      )}
    </styled.IdPpWrapper>
  );
};
