import React from "react";
import { Color } from "../colorCodes";
import * as styled from "./styles/dropdown";

export type DropdownProps = {
  maxHeight?: number;
  width?: number;
  backgroundColor?: string;
  backgroundColorOnHover?: string;
  fontColor?: string;
  fontSize?: number;
  fontColorOnHover?: string;
};

export const Dropdown = (props: DropdownProps) => {
  const {
    maxHeight,
    width,
    backgroundColor = Color.white,
    backgroundColorOnHover = Color.lightBlue,
    fontColor = Color.darkBlueFont,
    fontColorOnHover = Color.white,
    fontSize,
  } = props;

  const dropdownSettings = {
    maxHeight,
    width,
    backgroundColor,
    backgroundColorOnHover,
    fontColor,
    fontColorOnHover,
    fontSize,
  };

  return (
    <styled.DropdownWrapper>
      <styled.OptionsWrapper>
        <styled.Option dropdownSettings={dropdownSettings}>Name</styled.Option>
        <styled.Option dropdownSettings={dropdownSettings}>Name</styled.Option>
        <styled.Option dropdownSettings={dropdownSettings}>Name</styled.Option>
        <styled.Option dropdownSettings={dropdownSettings}>Name</styled.Option>
        <styled.Option dropdownSettings={dropdownSettings}>Name</styled.Option>
      </styled.OptionsWrapper>
    </styled.DropdownWrapper>
  );
};
