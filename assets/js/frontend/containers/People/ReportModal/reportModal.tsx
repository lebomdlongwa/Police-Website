import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles";
import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";
import { ShadowContainer } from "../../../appStyles";
import { DatePickerComponent } from "../../../components/DateComponent";

type PeopleReportModalProps = {
  handleShowModal: VoidCallBack;
};

type State = {
  last_seen: string;
  last_place_seen: string;
  clothes: string;
  known_as: string;
  brief_circumstance: string;
};

export class PeopleReportModal extends Component<
  PeopleReportModalProps,
  State
> {
  constructor(props: PeopleReportModalProps) {
    super(props);

    this.state = {
      last_seen: "",
      last_place_seen: "",
      clothes: "",
      known_as: "",
      brief_circumstance: "",
    };
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
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
                  placeholder="Enter last place seen at..."
                  onChange={this.onChange}
                  value={this.state.last_place_seen}
                  name="last_place_seen"
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
                placeholder="clothes last seen wearing..."
                onChange={this.onChange}
                value={this.state.clothes}
                name="clothes"
              />
            </styled.Clothes>
            <styled.BriefCircumstance>
              <styled.InputLabel>Brief Summary</styled.InputLabel>
              <styled.BriefCircumstanceInput
                placeholder="Have seen him a couple of times going to the store..."
                onChange={this.onChange}
                value={this.state.brief_circumstance}
                name="brief_circumstance"
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
            />
          </styled.ModalButtonWrapper>
        </ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
