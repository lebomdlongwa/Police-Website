import React, { useState } from "react";
import SideBar from "./NavBar";
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
  const [expandMenu, setExpandMenu] = useState(false);

  const handleExpandMenu = () => setExpandMenu(!expandMenu);

  return (
    <BrowserRouter>
      <styled.AppContainer>
        <styled.AppSideBar
          expandMenu={expandMenu}
          onMouseLeave={() => setExpandMenu(false)}
        >
          <SideBar
            handleExpandMenu={handleExpandMenu}
            expandMenu={expandMenu}
          />
        </styled.AppSideBar>
        <styled.AppBody expandMenu={expandMenu}>
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
        </styled.AppBody>
      </styled.AppContainer>
    </BrowserRouter>
  );
};

export default PoliceApp;
