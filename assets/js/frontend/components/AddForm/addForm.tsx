import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles/addform";
import { Button } from "../Button/button";
import { createId, updateId } from "../IdAndPassport/actions";

type AddFormComponentProps = {
  handleShowAddForm: VoidCallBack;
  showAddForm: boolean;
  setIdList: (list: IdItem[]) => void;
  item?: IdItem;
  edit?: boolean;
  setEdit?: VoidCallBack;
};

type State = {
  fullname: string;
  idNumber: string;
  dateLost: string;
};

class AddFormComponent extends Component<AddFormComponentProps, State> {
  constructor(props: AddFormComponentProps) {
    super(props);

    this.state = {
      fullname: "",
      idNumber: "",
      dateLost: "",
    };
  }

  handleFetchedData = (data: IdPpParams) => {
    this.setState({
      fullname: data.fullname,
      idNumber: data.idNumber,
      dateLost: data.dateLost,
    });
  };

  handleAddItem = async () => {
    const { setIdList } = this.props;

    const response = await createId({ ...this.state });
    setIdList(response);
  };

  handleUpdateItem = async () => {
    const { item, setIdList } = this.props;

    const response = await updateId(item.id, { ...this.state });
    setIdList(response);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { item, handleShowAddForm, edit, setEdit } = this.props;
    const formHeader = edit ? "Edit ID" : "Add ID";
    const addOrEditButton = edit ? "Edit" : "Add";

    return (
      <styled.AddFormContainer>
        <styled.FormWrapper>
          <styled.FormHeader>{formHeader}</styled.FormHeader>
          <styled.FormBody>
            <styled.FormInputWrapper>
              <styled.FormLabel>
                Full Name
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput
                placeholder="Enter full name..."
                value={item?.fullname || this.state.fullname}
                onChange={this.onChange}
                name="fullname"
              />
            </styled.FormInputWrapper>
            <styled.FormInputWrapper>
              <styled.FormLabel>
                ID Number
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput
                placeholder="Enter ID number..."
                value={this.state.idNumber}
                onChange={this.onChange}
                name="idNumber"
              />
            </styled.FormInputWrapper>
            <styled.FormInputWrapper>
              <styled.FormLabel>
                Date Lost
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput />
            </styled.FormInputWrapper>
          </styled.FormBody>
          <styled.FormFooter>
            <Button
              text="Cancel"
              onClick={() => {
                handleShowAddForm();
                setEdit();
              }}
            />
            <Button
              text={addOrEditButton}
              onClick={() => {
                this.handleAddItem();
                handleShowAddForm();
                setEdit();
              }}
            />
          </styled.FormFooter>
        </styled.FormWrapper>
      </styled.AddFormContainer>
    );
  }
}

export default AddFormComponent;
