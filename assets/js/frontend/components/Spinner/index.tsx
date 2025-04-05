import React from "react";

import RiseLoader from "react-spinners/RiseLoader";

import * as styled from "./styles";

import { Color } from "../colorCodes";

type SpinnerProps = {
  size?: number;
  color?: string;
};

export const Spinner = (props: SpinnerProps) => {
  const { size = 15, color = Color.navyBlue } = props;

  return (
    <styled.SpinnerContainer>
      <RiseLoader
        color={Color.navyBlue}
        loading={true}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </styled.SpinnerContainer>
  );
};
