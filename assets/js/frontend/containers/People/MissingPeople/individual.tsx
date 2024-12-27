import React, { ChangeEvent, Component, useState } from "react";
import * as styled from "./styles/individual";
import { ReportModal } from "../ReportModal/reportModal";

type IndividualProps = {
  handleShowPersonInfo: (id: string) => void;
  peopleList: MissingPersonParams[];
  showPersonInfo: boolean;
  onAddPerson: (params: MissingPersonParams) => Promise<void>;
  onUpdatePerson: (id: string, params: MissingPersonParams) => Promise<void>;
  clickedPersonItem: MissingPersonParams;
};

type State = {
  formInput: Partial<MissingPersonParams>;
  showReporterModal: boolean;
};

export class Individual extends Component<IndividualProps, State> {
  constructor(props: IndividualProps) {
    super(props);

    this.state = {
      formInput: {
        fullname: "",
        age: "",
        last_seen: "",
        last_place_seen: "",
        clothes: "",
        height: "",
        weight: "",
        body_stature: "medium",
        skin_colour: "",
      },
      showReporterModal: false,
    };
  }

  handleShowModal = () =>
    this.setState({
      showReporterModal: !this.state.showReporterModal,
    });

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      formInput: {
        ...this.state.formInput,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const {
      handleShowPersonInfo,
      onAddPerson,
      onUpdatePerson,
      clickedPersonItem,
      showPersonInfo,
    } = this.props;

    const header = showPersonInfo ? "Edit Missing Person" : "Case 076834-B";

    return (
      <styled.Wrapper>
        <styled.CaseHeader>{header}</styled.CaseHeader>
        <styled.DetailsWrapper>
          <styled.Details>
            <styled.DetailRows>
              <styled.SubjectContentWrapper>
                <styled.DetailSubject>Name</styled.DetailSubject>
                <styled.DetailContent
                  placeholder={
                    showPersonInfo
                      ? clickedPersonItem.fullname
                      : "Enter fullname..."
                  }
                  name="fullname"
                  onChange={this.onChange}
                />
              </styled.SubjectContentWrapper>
            </styled.DetailRows>
            <styled.DetailRows>
              <styled.SubjectContentWrapper>
                <styled.DetailSubject>Age</styled.DetailSubject>
                <styled.DetailContent
                  placeholder={
                    showPersonInfo ? clickedPersonItem.age : "Enter age..."
                  }
                  name="age"
                  onChange={this.onChange}
                />
              </styled.SubjectContentWrapper>
            </styled.DetailRows>
            <styled.DetailRows>
              <styled.SubjectContentWrapper>
                <styled.DetailSubject>Last Seen</styled.DetailSubject>
                <styled.DetailContent
                  placeholder={
                    showPersonInfo
                      ? clickedPersonItem.last_seen
                      : "Enter date last seen..."
                  }
                  name="last_seen"
                  onChange={this.onChange}
                />
              </styled.SubjectContentWrapper>
            </styled.DetailRows>
            <styled.DetailRows>
              <styled.SubjectContentWrapper>
                <styled.DetailSubject>Last Place Seen</styled.DetailSubject>
                <styled.DetailContent
                  placeholder={
                    showPersonInfo
                      ? clickedPersonItem.last_place_seen
                      : "Enter last place seen..."
                  }
                  name="last_place_seen"
                  onChange={this.onChange}
                />
              </styled.SubjectContentWrapper>
            </styled.DetailRows>
            <styled.DetailRows>
              <styled.SubjectContentWrapper>
                <styled.DetailSubject>Clothes</styled.DetailSubject>
                <styled.DetailContent
                  placeholder={
                    showPersonInfo
                      ? clickedPersonItem.clothes
                      : "Enter clothes last seen wearing..."
                  }
                  name="clothes"
                  onChange={this.onChange}
                />
              </styled.SubjectContentWrapper>
            </styled.DetailRows>
            <styled.DoubleDetailRowWrapper>
              <styled.DoubleDetailRow>
                <styled.DetailRows>
                  <styled.SubjectContentWrapper>
                    <styled.DetailSubject>Height</styled.DetailSubject>
                    <styled.DetailContent
                      placeholder={
                        showPersonInfo
                          ? clickedPersonItem.height
                          : "Enter height..."
                      }
                      name="height"
                      onChange={this.onChange}
                    />
                  </styled.SubjectContentWrapper>
                </styled.DetailRows>
              </styled.DoubleDetailRow>
              <styled.DoubleDetailRow>
                <styled.DetailRows>
                  <styled.SubjectContentWrapper>
                    <styled.DetailSubject>Weight</styled.DetailSubject>
                    <styled.DetailContent
                      placeholder={
                        showPersonInfo
                          ? clickedPersonItem.weight
                          : "Enter weight..."
                      }
                      name="weight"
                      onChange={this.onChange}
                    />
                  </styled.SubjectContentWrapper>
                </styled.DetailRows>
              </styled.DoubleDetailRow>
            </styled.DoubleDetailRowWrapper>
            <styled.DoubleDetailRowWrapper>
              <styled.DoubleDetailRow>
                <styled.DetailRows>
                  <styled.SubjectContentWrapper>
                    <styled.DetailSubject>Body Stature</styled.DetailSubject>
                    <styled.DetailContent
                      placeholder={
                        showPersonInfo
                          ? clickedPersonItem.body_stature
                          : "Enter body stature..."
                      }
                      name="body_stature"
                      onChange={this.onChange}
                    />
                  </styled.SubjectContentWrapper>
                </styled.DetailRows>
              </styled.DoubleDetailRow>
              <styled.DoubleDetailRow>
                <styled.DetailRows>
                  <styled.SubjectContentWrapper>
                    <styled.DetailSubject>Skin Colour</styled.DetailSubject>
                    <styled.DetailContent
                      placeholder={
                        showPersonInfo
                          ? clickedPersonItem.skin_colour
                          : "Enter skin colour..."
                      }
                      name="skin_colour"
                      onChange={this.onChange}
                    />
                  </styled.SubjectContentWrapper>
                </styled.DetailRows>
              </styled.DoubleDetailRow>
            </styled.DoubleDetailRowWrapper>
          </styled.Details>
          <styled.PictureWrapper>
            <styled.Picture></styled.Picture>
          </styled.PictureWrapper>
        </styled.DetailsWrapper>
        {!showPersonInfo && (
          <styled.ReportPersonWrapper>
            <styled.ReportPersonHeader>
              I may know this person
            </styled.ReportPersonHeader>
            <styled.ReportPersonBody>
              <styled.ReportPersonButton onClick={this.handleShowModal}>
                {/* <styled.ReportPersonButton
              onClick={() => onAddPerson({ ...this.state.formInput })}
            > */}
                If you have any information about this person you can click here
                to report. Your Report will be very helpful
              </styled.ReportPersonButton>
            </styled.ReportPersonBody>
          </styled.ReportPersonWrapper>
        )}
        {this.state.showReporterModal && (
          <ReportModal handleShowModal={this.handleShowModal} />
        )}
        <styled.Footer>
          You have made some changes
          <styled.FooterButtonsWrapper>
            <styled.FooterButton text="Cancel" />
            <styled.FooterButton text="Save" />
          </styled.FooterButtonsWrapper>
        </styled.Footer>
      </styled.Wrapper>
    );
  }
}
