import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles/addform";
import { Button } from "../../../components/Button/button";
import { createId, updateId } from "../actions";

type AddFormComponentProps = {
  handleShowAddForm: VoidCallBack;
  showAddForm: boolean;
  setIdList: (list: IdItem[]) => void;
  item?: IdItem;
  edit?: boolean;
  setEdit?: VoidCallBack;
};

type State = {
  name: string;
  surname: string;
  idNumber: string;
  dateLost: string;
};

class AddFormComponent extends Component<AddFormComponentProps, State> {
  constructor(props: AddFormComponentProps) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      idNumber: "",
      dateLost: "",
    };
  }

  componentDidMount() {
    const { item } = this.props;

    this.setState({
      ...this.state,
      ...item,
    });
  }

  handleFetchedData = (data: IdPpParams) => {
    this.setState({
      name: data.name,
      surname: data.surname,
      idNumber: data.idNumber,
      dateLost: data.dateLost,
    });
  };

  handleAddItem = () => {
    const { setIdList } = this.props;

    createId({ ...this.state })
      .then((response) => setIdList(response))
      .catch((err) => err);
  };

  handleUpdateItem = () => {
    const { item, setIdList } = this.props;

    updateId(item.id, { ...this.state })
      .then((response) => setIdList(response))
      .catch((err) => err);
  };

  onUpdateOrAdd = () => {
    const { edit } = this.props;

    edit ? this.handleUpdateItem() : this.handleAddItem();
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
                Name
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput
                placeholder="Enter name..."
                value={this.state.name}
                onChange={this.onChange}
                name="name"
              />
            </styled.FormInputWrapper>
            <styled.FormInputWrapper>
              <styled.FormLabel>
                Surname
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput
                placeholder="Enter surname..."
                value={this.state.surname}
                onChange={this.onChange}
                name="surname"
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
            {/* <styled.FormInputWrapper>
              <styled.FormLabel>
                Date Lost
                <styled.RequiredAsterisk>*</styled.RequiredAsterisk>
              </styled.FormLabel>
              <styled.FormInput />
            </styled.FormInputWrapper> */}
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
                this.onUpdateOrAdd();
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
