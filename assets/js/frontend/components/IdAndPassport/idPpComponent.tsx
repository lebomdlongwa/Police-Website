import React, { useState } from "react";
import * as styled from "./styles/idPpComponent";
import { CalendarIcon } from "../icons/calendar";
import { EditIcon } from "../icons/edit";
import { IdIcon } from "../icons/id_card";
import { TrashIcon } from "../icons/trash";
import { deleteId } from "./actions";
import AddFormComponent from "../AddForm/addForm";
import { useUser } from "../../containers/userContext";
import { AvatarComponent } from "../Avatar/avatar";

type IdPpComponentProps = {
  item: IdItem;
  setIdList?: (list: IdItem[]) => void;
  color?: string;
};

export const IdPpComponent = (props: IdPpComponentProps) => {
  const { item, setIdList } = props;
  const { admin } = useUser();

  const [showAddForm, setShowAddForm] = useState(false);
  const handleShowAddForm = () => setShowAddForm(!showAddForm);

  const [edit, setEdit] = useState(false);
  const handleSetEdit = () => setEdit(!edit);

  const handleDeleteItem = async () => {
    const response = await deleteId(item.id);
    setIdList(response);
  };

  const fullname = item && `${item.name} ${item.surname}`;
  const initials = item && `${item.name[0]}`;

  return (
    <styled.IdPpWrapper>
      <styled.ItemContainer>
        <styled.ItemWrapper>
          <styled.Item admin={admin}>
            <AvatarComponent initials={initials} />
            <styled.ItemContent>
              <styled.FullName>
                <styled.Content>{fullname}</styled.Content>
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
                <styled.Content>{item.dateLost}</styled.Content>
              </styled.DateLost>
            </styled.ItemContent>
          </styled.Item>
          {admin && (
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
          )}
        </styled.ItemWrapper>
      </styled.ItemContainer>
      {showAddForm && (
        <>
          <AddFormComponent
            handleShowAddForm={handleShowAddForm}
            showAddForm={showAddForm}
            setIdList={setIdList}
            item={item}
            setEdit={handleSetEdit}
            edit={edit}
          />
        </>
      )}
    </styled.IdPpWrapper>
  );
};
