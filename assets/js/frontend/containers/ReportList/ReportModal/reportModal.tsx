import React, { ChangeEvent, Component } from "react";
import * as styled from "./styles";
import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";

type ReportModalComponentProps = {
  report?: ReportItem;
  showReportEditModal?: boolean;
  handleShowReportModal?: VoidCallBack;
  handleShowReportEditModal?: VoidCallBack;
  onCreate?: (params: ReportParams) => Promise<void>;
  onUpdate: (id: string, params: ReportParams) => Promise<void>;
};

export class ReportModalComponent extends Component<
  ReportModalComponentProps,
  ReportParams
> {
  constructor(props: ReportModalComponentProps) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      officer: "",
      grade: "",
      accused: "",
      brief_circumstance: "",
    };
  }

  componentDidMount() {
    const { report } = this.props;

    this.setState({
      ...this.state,
      ...report
    })
  };

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      handleShowReportModal,
      handleShowReportEditModal,
      onCreate,
      onUpdate,
      showReportEditModal,
      report,
    } = this.props;

    const addOrEditButonText = showReportEditModal ? "Edit" : "Add";

    const handleModal = () => {
      if (showReportEditModal) {
        return handleShowReportEditModal();
      } else {
        return handleShowReportModal();
      }
    };

    const handleAddorUpdate = () => {
      if (showReportEditModal) {
        return onUpdate(report.id, { ...this.state });
      } else {
        return onCreate({ ...this.state });
      }
    };

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
          <styled.OfficerGradeWrapper>
            <styled.Officer>
              <styled.InputLabel>Officer</styled.InputLabel>
              <styled.FormInput
                placeholder="Enter officer name..."
                onChange={this.onChange}
                value={this.state.officer}
                name="officer"
              />
            </styled.Officer>
            <styled.Grade>
              <styled.InputLabel>Grade</styled.InputLabel>
              <styled.FormInput
                style={{ textAlign: "center" }}
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
                placeholder="Enter accused name..."
              onChange={this.onChange}
              value={this.state.accused}
              name="accused"
            />
          </styled.SuspectName>
          <styled.BriefCircumstance>
            <styled.InputLabel>Brief Summary</styled.InputLabel>
            <styled.BriefCircumstanceInput
              placeholder="Enter brief summary..."
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
            onClick={() => {
              handleModal();
            }}
          />
          <Button
            buttonColor={Color.blue}
            fontColor={Color.white}
            text={addOrEditButonText}
            onClick={() => {
              handleModal();
              handleAddorUpdate();
            }}
          />
        </styled.ModalButtonWrapper>
        </styled.ShadowContainer>
      </styled.ReportModalWrapper>
    );
  }
}
