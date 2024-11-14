import React from "react";
import * as styled from "./styles";
import { ReportListComponent } from "../ReportList/reportList";

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
