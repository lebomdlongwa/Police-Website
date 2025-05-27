import React from "react";

import RiseLoader from "react-spinners/RiseLoader";
import ClipLoader from "react-spinners/ClipLoader";

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
        color={color}
        loading={true}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </styled.SpinnerContainer>
  );
};

export const CircleLoader = (props: SpinnerProps) => {
  const { size = 15, color = Color.navyBlue } = props;

  return (
    <styled.SpinnerContainer>
      <ClipLoader
        color={color}
        loading={true}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </styled.SpinnerContainer>
  );
};
