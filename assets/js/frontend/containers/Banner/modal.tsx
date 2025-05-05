import React, { ChangeEvent, Component } from "react";

import { Color } from "../../components/colorCodes";
import { Button } from "../../components/Button/button";
import { socket } from "../../socket";
import { geoLocation } from "../../geoLocation";

import * as styled from "./styles/ReportModal";

type BannerReportModalProps = {
  handleShowModal: VoidCallBack;
  user: UserObject;
  onSetLocation: (location: GeoLocation) => void;
  onSetImgUrl: (url: string) => void;
  location: GeoLocation;
  imgUrl: string;
  submitForm: boolean;
};

type State = {
  type: "crime";
  name: string;
  surname: string;
  accused: string;
  brief_circumstance: string;
};

export class BannerReportModal extends Component<
  BannerReportModalProps,
  State
> {
  constructor(props: BannerReportModalProps) {
    super(props);

    this.state = {
      type: "crime",
      name: "",
      surname: "",
      accused: "",
      brief_circumstance: "",
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

  handleSaveForm = () => {
    const { onSetImgUrl, onSetLocation } = this.props;

    geoLocation(onSetImgUrl, onSetLocation);
  };

  render() {
    const { handleShowModal, user, imgUrl, location, submitForm } = this.props;
    console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", user?.name);

    if (submitForm) {
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
      this.channel.push("send_mails", {
        mail: {
          ...this.state,
          name: user?.name,
          surname: user?.surname,
          location: { ...location, imgUrl },
        },
      });
      handleShowModal();
    }

    return (
      <styled.ReportModalWrapper
        width={50}
        height={100}
        backgroundColor={Color.chalk}
      >
        <styled.ShadowContainer>
          <styled.FormWrapper>
            <styled.SuspectName>
              <styled.InputLabel>Suspect Name</styled.InputLabel>
              <styled.FormInput
                placeholder="Enter accused name..."
                onChange={this.onChange}
                value={this.state.accused}
                name="accused"
              />
            </styled.SuspectName>
            <styled.BriefCircumstance>
              <styled.InputLabel>Brief Summary</styled.InputLabel>
              <styled.BriefCircumstanceInput
                placeholder="My car was stolen during the night at our house..."
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
              onClick={this.handleSaveForm}
            />
          </styled.ModalButtonWrapper>
        </styled.ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
