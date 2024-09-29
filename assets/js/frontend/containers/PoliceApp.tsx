import React from "react";
import Navbar from "./NavBar";
import { MissingList } from "./People/MissingPeople";
import { Individual } from "./People/MissingPeople/individual";
import * as styled from "./styles/app";
import { IdPassportPage } from "../components/IdAndPassport";
import { LostItems } from "../components/LostItem/lostItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ReportList } from "./ReportList/reportList";
import { Report } from "./ReportList/report/report";

export const routes = {
  home: "/",
  missing: "/police/missing_list",
  lost_id_pp: "/police/lost_id_pp",
  lost_general_goods: "/police/lost_general_goods",
  reports_list: "/police/reportsList",
  report: "police/report",
};

const PoliceApp = () => {
  return (
    <BrowserRouter>
      <styled.AppContainer>
        <styled.AppNavBar>
          <Navbar />
        </styled.AppNavBar>
      </styled.AppContainer>

      <Routes>
        <Route path={routes.home} Component={HomePage} />
      </Routes>
      <Routes>
        <Route path={routes.missing} Component={MissingList} />
      </Routes>
      <Routes>
        <Route path={routes.lost_id_pp} Component={IdPassportPage} />
      </Routes>
      <Routes>
        <Route path={routes.lost_general_goods} Component={LostItems} />
      </Routes>
      <Routes>
        <Route path={`${routes.missing}/:id`} Component={Individual} />
      </Routes>
      <Routes>
        <Route path={routes.reports_list} Component={ReportList} />
      </Routes>
      <Routes>
        <Route path={`${routes.report}/:id`} Component={Report} />
      </Routes>
    </BrowserRouter>
  );
};

export default PoliceApp;
