import React, { Component } from "react";
import * as styled from "./styles/sortBy";
import { SearchIcon } from "../../components/icons/search";
import { Color } from "../../components/colorCodes";
import { XIcon } from "../../components/icons/xIcon";

type SortByComponentProps = {
  onGetReports: (params?: SortByType) => Promise<void>;
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
    const { onGetReports } = this.props;

    if (option === "grade") {
      if (this.state.grade == false) {
        this.setState({
          ...this.state,
          [option]: !this.state[option],
        });

        onGetReports(option);
      } else {
        this.setState({
          ...this.state,
          [option]: !this.state[option],
        });

        onGetReports();
      }
    }
  };

  render() {
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
                <XIcon h={30} w={30} c={Color.white} />
              </styled.XIcon>
            </styled.Options>
            <styled.Options
              onClick={() => this.handleClickOption("grade")}
              active={this.state.grade}
            >
              Grade
              <styled.XIcon active={this.state.grade}>
                <XIcon h={30} w={30} c={Color.white} />
              </styled.XIcon>
            </styled.Options>
          </styled.OptionsWrapper>
        </styled.SortByWrapper>
        <styled.SearchBox>
          <styled.SearchIcon>
            <SearchIcon h={25} w={25} c={Color.iconGray} />
          </styled.SearchIcon>
          <styled.SearchInput placeholder="Type some text to search..."></styled.SearchInput>
        </styled.SearchBox>
      </styled.Wrapper>
    );
  }
}
