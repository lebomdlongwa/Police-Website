import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles";
import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";
import { ShadowContainer } from "../../../appStyles";
import { DatePickerComponent } from "../../../components/DateComponent";
import { addMissingReport } from "./actions";

type PeopleReportModalProps = {
  handleShowModal: VoidCallBack;
  id: string;
};

type State = {
  date_last_seen: string;
  location_last_seen: string;
  clothes_worn: string;
  known_as: string;
  brief_summary: string;
};

export class PeopleReportModal extends Component<
  PeopleReportModalProps,
  State
> {
  constructor(props: PeopleReportModalProps) {
    super(props);

    this.state = {
      date_last_seen: "",
      location_last_seen: "",
      clothes_worn: "",
      known_as: "",
      brief_summary: "",
    };
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleCreateReport = async () => {
    const { id } = this.props;

    const response = await addMissingReport({
      ...this.state,
      person_id: id,
    });
  };

  handleSaveReport = () => {
    const { handleShowModal } = this.props;

    this.handleCreateReport();
    handleShowModal();
  };

  render() {
    const { handleShowModal } = this.props;

    return (
      <styled.ReportModalWrapper
        width={50}
        height={100}
        backgroundColor={Color.chalk}
      >
        <ShadowContainer>
          <styled.FormWrapper>
            <styled.DateAndPlaceContainer>
              <styled.DateWrapper>
                <styled.InputLabel>Date Last Seen</styled.InputLabel>
                <DatePickerComponent />
              </styled.DateWrapper>
              <styled.Place>
                <styled.InputLabel>Last Place Seen At</styled.InputLabel>
                <styled.FormInput
                  placeholder="Enter location place seen at..."
                  onChange={this.onChange}
                  value={this.state.location_last_seen}
                  name="location_last_seen"
                />
              </styled.Place>
            </styled.DateAndPlaceContainer>
            <styled.SuspectName>
              <styled.InputLabel>Suspect Name</styled.InputLabel>
              <styled.FormInput
                placeholder="Enter name known as..."
                onChange={this.onChange}
                value={this.state.known_as}
                name="known_as"
              />
            </styled.SuspectName>
            <styled.Clothes>
              <styled.InputLabel>Clothes Worn</styled.InputLabel>
              <styled.FormInput
                placeholder="clothes_worn last seen wearing..."
                onChange={this.onChange}
                value={this.state.clothes_worn}
                name="clothes_worn"
              />
            </styled.Clothes>
            <styled.BriefCircumstance>
              <styled.InputLabel>Brief Summary</styled.InputLabel>
              <styled.BriefCircumstanceInput
                placeholder="Have seen him a couple of times going to the store..."
                onChange={this.onChange}
                value={this.state.brief_summary}
                name="brief_summary"
              />
            </styled.BriefCircumstance>
          </styled.FormWrapper>
          <styled.ModalButtonWrapper>
            <Button
              buttonColor={Color.blue}
              fontColor={Color.white}
              text="Cancel"
              onClick={handleShowModal}
            />
            <Button
              buttonColor={Color.blue}
              fontColor={Color.white}
              text="Report"
              onClick={this.handleSaveReport}
            />
          </styled.ModalButtonWrapper>
        </ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
