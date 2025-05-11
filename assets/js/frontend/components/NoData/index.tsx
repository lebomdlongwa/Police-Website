import React from "react";

import * as styled from "./styles";

import { Icon } from "../icons";

type NoDataComponentProps = {
  isEmail?: boolean;
};

export const NoDataComponent = (props: NoDataComponentProps) => {
  const { isEmail = false } = props;

  return (
    <styled.NoDataWrapper>
      <styled.NoDataTitle>
        <styled.NoDataLabel>No data available</styled.NoDataLabel>
        <Icon name="redWarning" size={27} />
      </styled.NoDataTitle>
      <Icon name="empty" size={isEmail ? 250 : 400} />
    </styled.NoDataWrapper>
  );
};
