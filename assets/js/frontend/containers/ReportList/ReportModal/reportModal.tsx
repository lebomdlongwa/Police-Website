import React, { ChangeEvent, Component } from "react";

import * as styled from "./styles";
import { Color } from "../../../components/colorCodes";
import { Button } from "../../../components/Button/button";
import { Dropdown } from "../../../components/Dropdown/dropdown";

type ReportModalComponentProps = {
  report?: ReportItem;
  showReportEditModal?: boolean;
  handleShowReportModal?: VoidCallBack;
  handleShowReportEditModal?: VoidCallBack;
  onCreate?: (params: ReportParams) => void;
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
      crime_type: null,
    };
  }

  componentDidMount() {
    const { report } = this.props;

    this.setState({
      ...this.state,
      ...report,
    });
  }

  onChange = (
    eOrKeyName?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    value?: string
  ) => {
    let key: string | undefined;
    let val: string | undefined;

    if (typeof eOrKeyName === "string") {
      key = eOrKeyName;
      val = value;
    } else {
      key = eOrKeyName.target.name;
      val = eOrKeyName.target.value;
    }

    if (!key) return;

    this.setState({
      ...this.state,
      [key]: val,
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

    const crimeTypeOptions = [
      "Theft",
      "Murder",
      "Assualt",
      "Phyical Abuse",
      "Child Abuse",
    ];

    const gradeOptions = ["A", "B", "C", "D"];

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
                <Dropdown
                  options={gradeOptions}
                  fontColor={Color.black}
                  fn={(value: string) => this.onChange("grade", value)}
                >
                  <styled.FormInput
                    style={{ textAlign: "center" }}
                    onChange={this.onChange}
                    value={this.state.grade}
                    name="grade"
                  />
                </Dropdown>
              </styled.Grade>
            </styled.OfficerGradeWrapper>
            <styled.SuspectAndCrimeType>
              <styled.SuspectName>
                <styled.InputLabel>Suspect Name</styled.InputLabel>
                <styled.FormInput
                  placeholder="Enter accused name..."
                  onChange={this.onChange}
                  value={this.state.accused}
                  name="accused"
                />
              </styled.SuspectName>
              <styled.CrimeType>
                <Dropdown
                  options={crimeTypeOptions}
                  fontColor={Color.black}
                  fontSize={15}
                  displayDropdown
                  fn={(value: string) => this.onChange("crime_type", value)}
                >
                  <styled.InputLabel>Crime/Case Type</styled.InputLabel>
                  <styled.FormInput
                    placeholder="Select..."
                    onChange={this.onChange}
                    value={this.state.crime_type}
                    name="crime_type"
                  />
                </Dropdown>
              </styled.CrimeType>
            </styled.SuspectAndCrimeType>
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
