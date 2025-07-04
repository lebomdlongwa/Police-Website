import React, { ChangeEvent, Component } from "react";

import * as styled from "./styles";

import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";
import { ShadowContainer } from "../../../appStyles";
import { socket } from "../../../socket";

type PeopleReportModalProps = {
  handleShowModal: VoidCallBack;
  id: string;
  user: UserObject;
};

type State = {
  type: "person";
  date_last_seen: string;
  location_last_seen: string;
  clothes_worn: string;
  known_as: string;
  brief_summary: string;
  name: string;
  surname: string;
};

export class PeopleReportModal extends Component<
  PeopleReportModalProps,
  State
> {
  constructor(props: PeopleReportModalProps) {
    super(props);

    this.state = {
      type: "person",
      date_last_seen: "",
      location_last_seen: "",
      clothes_worn: "",
      known_as: "",
      brief_summary: "",
      name: "",
      surname: "",
    };

    this.channel = socket.channel("mail:lobby", {});
    this.channelJoined = false;
  }

  channel = socket.channel("mail:lobby", {});
  channelJoined = false;

  componentDidMount() {
    if (!this.channelJoined) {
      this.channel
        .join()
        .receive("ok", (resp) => {
          console.log("Joined successfully", resp);
          this.channelJoined = true;
        })
        .receive("error", (resp) => {
          console.log("Unable to join", resp);
        });
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleCreateMailReport = () => {
    const { id, user } = this.props;

    this.channel.push("send_mails", {
      mail: {
        ...this.state,
        missing_person_id: id,
        name: user.name,
        surname: user.surname,
      },
    });
  };

  handleSaveMailReport = () => {
    const { handleShowModal } = this.props;

    this.handleCreateMailReport();
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
                <styled.FormInput
                  placeholder="Enter date seen..."
                  onChange={this.onChange}
                  value={this.state.date_last_seen}
                  name="date_last_seen"
                />
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
              onClick={this.handleSaveMailReport}
            />
          </styled.ModalButtonWrapper>
        </ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
