import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles/addform";
import { Button } from "../Button/button";
import { createId, updateId } from "../IdAndPassport/actions";

type AddFormComponentProps = {
  handleShowAddForm: VoidCallBack;
  showAddForm: boolean;
  setIdList: (list: IdItem[]) => void;
  item: IdItem;
  edit: boolean;
  setEdit: VoidCallBack;
};

interface MyChangeEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

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

  onFullnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ fullname: value });
  };

  onIdNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ idNumber: value });
  };

  onDateLostChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ dateLost: value });
  };

  handleFetchedData = (data: Params) => {
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

  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  render() {
    const { edit, setEdit, item, handleShowAddForm } = this.props;

    return (
      <styled.AddFormContainer>
        <styled.FormWrapper>
          <styled.FormHeader>Add new ID</styled.FormHeader>
          <styled.FormBody>
            <styled.FormInputWrapper>
              <styled.FormLabel>
                Full Name
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput
                placeholder="Enter full name..."
                value={this.state.fullname}
                onChange={this.onFullnameChange}
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
                onChange={this.onIdNumberChange}
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
              }}
            />
            <Button
              text="Add"
              onClick={() => {
                this.handleAddItem();
                handleShowAddForm();
              }}
            />
          </styled.FormFooter>
        </styled.FormWrapper>
      </styled.AddFormContainer>
    );
  }
}

export default AddFormComponent;
