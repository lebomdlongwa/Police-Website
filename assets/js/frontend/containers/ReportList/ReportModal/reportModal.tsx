import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles";
import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";

type ReportModalComponentProps = {
  showReportModal: VoidCallBack;
  onCreate: (params: ReportParams) => Promise<void>;
  onUpdate: (id: string, params: ReportParams) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
};

export class ReportModalComponent extends Component<
  ReportModalComponentProps,
  ReportParams
> {
  constructor(props: ReportModalComponentProps) {
    super(props);

    this.state = {
      informant: "",
      officer: "",
      grade: "",
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
    const { showReportModal, onCreate, onUpdate, onDelete } = this.props;

    return (
      <styled.ReportModalWrapper
        width={50}
        height={100}
        backgroundColor={Color.darkBlue}
      >
        <styled.FormWrapper>
          <styled.Fullname>
            <styled.InputLabel>Fullname</styled.InputLabel>
            <styled.FormInput
              onChange={this.onChange}
              value={this.state.informant}
              name="informant"
            />
          </styled.Fullname>
          <styled.OfficerGradeWrapper>
            <styled.Officer>
              <styled.InputLabel>Officer</styled.InputLabel>
              <styled.FormInput
                onChange={this.onChange}
                value={this.state.officer}
                name="officer"
              />
            </styled.Officer>
            <styled.Grade>
              <styled.InputLabel>Grade</styled.InputLabel>
              <styled.FormInput
                width={80}
                onChange={this.onChange}
                value={this.state.grade}
                name="grade"
              />
            </styled.Grade>
          </styled.OfficerGradeWrapper>
          <styled.SuspectName>
            <styled.InputLabel>Suspect Name</styled.InputLabel>
            <styled.FormInput
              onChange={this.onChange}
              value={this.state.accused}
              name="accused"
            />
          </styled.SuspectName>
          <styled.BriefCircumstance>
            <styled.InputLabel>Brief Circumstance</styled.InputLabel>
            <styled.BriefCircumstanceInput
              onChange={this.onChange}
              value={this.state.brief_circumstance}
            />
          </styled.BriefCircumstance>
        </styled.FormWrapper>
        <styled.ModalButtonWrapper>
          <Button
            color={Color.white}
            text="Cancel"
            onClick={() => {
              showReportModal();
            }}
          />
          <Button
            color={Color.white}
            text="Add"
            onClick={() => {
              showReportModal();
              onCreate({ ...this.state });
            }}
          />
        </styled.ModalButtonWrapper>
      </styled.ReportModalWrapper>
    );
  }
}
