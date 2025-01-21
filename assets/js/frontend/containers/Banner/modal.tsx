import React, { ChangeEvent, Component } from "react";
import { Color } from "../../components/colorCodes";
import { Button } from "../../components/Button/button";
import * as styled from "./styles/ReportModal";

type BannerReportModalProps = {
  handleShowModal: VoidCallBack;
};

type State = {
  name: string;
  surname: string;
  email: string;
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
      name: "",
      surname: "",
      email: "",
      accused: "",
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
        <styled.ShadowContainer>
          <styled.FormWrapper>
            <styled.ReporterDetails>
              <styled.Name>
                <styled.InputLabel>Name</styled.InputLabel>
                <styled.FormInput
                  placeholder="Enter a name..."
                  onChange={this.onChange}
                  value={this.state.name}
                  name="name"
                />
              </styled.Name>
              <styled.Surname>
                <styled.InputLabel>Surname</styled.InputLabel>
                <styled.FormInput
                  placeholder="Enter a surname..."
                  onChange={this.onChange}
                  value={this.state.surname}
                  name="surname"
                />
              </styled.Surname>
            </styled.ReporterDetails>
            <styled.Email>
              <styled.InputLabel>Email Address</styled.InputLabel>
              <styled.FormInput
                placeholder="johnDoe@gmail.com"
                onChange={this.onChange}
                value={this.state.email}
                name="email"
              />
            </styled.Email>
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
            />
          </styled.ModalButtonWrapper>
        </styled.ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
