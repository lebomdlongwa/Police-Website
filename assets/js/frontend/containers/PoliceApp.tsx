import React, { useEffect, useState } from "react";
import SideBar from "./NavBar";
import { MissingList } from "./People/MissingPeople";
import * as styled from "./styles/app";
import { IdPassportPage } from "./IdAndPassport";
import { LostItems } from "../components/LostItem/lostItem";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ReportList } from "./ReportList/reportList";
import { Report } from "./ReportList/report/report";
import { ChatAppComponent } from "./Chat/chatApp";
import { IndividualComponent } from "./People/MissingPeople/Individual/individual";
import { PageNotFound } from "./PageNotFound";
import { ReportCasesComponent } from "./People/ReportCases";
import { useUser } from "./userContext";
import { MailBox } from "./Mail";
import { SignIn } from "./Authentication";

export const routes = {
  home: "/",
  missing: "/police/missing_list",
  missing_person_reports: "/police/missing_list/reports",
  lost_id_pp: "/police/lost_id_pp",
  lost_general_goods: "/police/lost_general_goods",
  reports_list: "/police/reportsList",
  report: "police/report",
  chat: "police/chat",
  mail: "police/mail",
};

const PoliceApp = () => {
  const { admin } = useUser();
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => setAuthenticated(!authenticated);
  const loggedIn = Boolean(sessionStorage.getItem("authenticated"));

  return (
    <>
      {!loggedIn ? (
        <SignIn onAuthenticate={handleAuthentication} />
      ) : (
        <BrowserRouter>
          <styled.AppContainer>
            <styled.AppSideBar>
              <SideBar />
            </styled.AppSideBar>
            <styled.AppBody>
              <Routes>
                <Route path={routes.home} element={<HomePage />} />
              </Routes>
              <Routes>
                <Route path={routes.missing} element={<MissingList />} />
              </Routes>
              <Routes>
                <Route
                  path={`${routes.missing}/:id`}
                  element={<IndividualComponent />}
                />
              </Routes>
              <Routes>
                <Route path={routes.lost_id_pp} element={<IdPassportPage />} />
              </Routes>
              <Routes>
                <Route
                  path={`${routes.missing_person_reports}/:id`}
                  element={admin ? <ReportCasesComponent /> : <Link to="/" />}
                />
              </Routes>
              <Routes>
                <Route path={routes.reports_list} element={<ReportList />} />
              </Routes>
              <Routes>
                <Route path={`${routes.report}/:id`} element={<Report />} />
              </Routes>
              <Routes>
                <Route path={routes.chat} element={<ChatAppComponent />} />
              </Routes>
              <Routes>
                <Route path={routes.mail} element={<MailBox />} />
              </Routes>
              <Routes>
                <Route element={<PageNotFound />} />
              </Routes>
            </styled.AppBody>
          </styled.AppContainer>
        </BrowserRouter>
      )}
    </>
  );
};

export default PoliceApp;
