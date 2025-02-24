import React, { Component } from "react";
import * as styled from "./styles/sortBy";
import { Color } from "../../components/colorCodes";
import { XIcon } from "../../components/icons/xIcon";
import { SearchComponent } from "../../components/SearchComponent/search";
import { Tooltip } from "../../components/Tooltip";

type SortByComponentProps = {
  handleGetReports: (params?: SortByType) => Promise<void>;
  reportList: ReportItem[];
  handleDisplaySearchedReportId: (id: string) => void;
};

type State = {
  officer: boolean;
  grade: boolean;
};

export class SortByComponent extends Component<SortByComponentProps, State> {
  constructor(props: SortByComponentProps) {
    super(props);

    this.state = {
      officer: false,
      grade: false,
    };
  }

  handleClickOption = (option: SortByType) => {
    const { handleGetReports } = this.props;

    if (option === "grade") {
      if (this.state.grade == false) {
        this.setState({
          ...this.state,
          [option]: !this.state[option],
        });

        handleGetReports(option);
      } else {
        this.setState({
          ...this.state,
          [option]: !this.state[option],
        });

        handleGetReports();
      }
    }
  };

  render() {
    const { reportList, handleDisplaySearchedReportId } = this.props;

    return (
      <styled.Wrapper>
        <styled.SortByWrapper>
          <styled.SortByLabel>Sort By:</styled.SortByLabel>
          <styled.OptionsWrapper>
            <styled.Options
              onClick={() => this.handleClickOption("officer")}
              active={this.state.officer}
            >
              Officer
              <styled.XIcon active={this.state.officer}>
                <XIcon size={30} color={Color.white} />
              </styled.XIcon>
            </styled.Options>
            <Tooltip content="Sort Report list by grade" position="S">
              <styled.Options
                onClick={() => this.handleClickOption("grade")}
                active={this.state.grade}
              >
                Grade
                <styled.XIcon active={this.state.grade}>
                  <XIcon size={30} color={Color.white} />
                </styled.XIcon>
              </styled.Options>
            </Tooltip>
          </styled.OptionsWrapper>
        </styled.SortByWrapper>
        <SearchComponent
          itemList={reportList}
          searchValue="name"
          handleDisplaySearchedItem={handleDisplaySearchedReportId}
        />
      </styled.Wrapper>
    );
  }
}
