import React from "react";
import * as styled from "./styles";
import { ReportList } from "../ReportList/reportList";

export const AdminSideBar = () => {
  return (
    <styled.SideBarWrapper>
      <styled.OptionsWrapper>
        <styled.Options></styled.Options>
        <styled.Options></styled.Options>
        <styled.Options></styled.Options>
        <styled.Options></styled.Options>
      </styled.OptionsWrapper>
    </styled.SideBarWrapper>
  );
};
