import React, { useState } from "react";
import * as styled from "./styles/idPpComponent";
import { CalendarIcon } from "../../components/icons/calendar";
import { EditIcon } from "../../components/icons/edit";
import { IdIcon } from "../../components/icons/id_card";
import { TrashIcon } from "../../components/icons/trash";
import { deleteId } from "./actions";
import AddFormComponent from "./AddForm/addForm";
import { useUser } from "../userContext";
import { AvatarComponent } from "../../components/Avatar/avatar";
import { DeleteModal } from "../../components/DeleteModal";

type IdPpComponentProps = {
  item?: IdItem;
  setIdList?: (list: IdItem[]) => void;
  color?: string;
};

export const IdPpComponent = (props: IdPpComponentProps) => {
  const { item, setIdList } = props;

  const [showAddForm, setShowAddForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);

  const { admin } = useUser();
  const handleShowAddForm = () => setShowAddForm(!showAddForm);
  const handleSetEdit = () => setEdit(!edit);
  const handleDeleteStatus = () => setDeleteActive(!deleteActive);

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
              <styled.Button onClick={handleDeleteStatus}>
                <styled.ButtonIcon>
                  <TrashIcon h={20} w={20} />
                </styled.ButtonIcon>
              </styled.Button>
            </styled.ButtonsWrapper>
          )}
        </styled.ItemWrapper>
      </styled.ItemContainer>
      {deleteActive && (
        <DeleteModal
          onCloseModal={handleDeleteStatus}
          onDelete={handleDeleteItem}
        />
      )}
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
