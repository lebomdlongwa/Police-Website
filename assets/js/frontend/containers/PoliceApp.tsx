import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SideBar from "./NavBar";
import { MissingList } from "./People/MissingPeople";
import { IdPassportPage } from "./IdAndPassport";
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
import { getUser } from "./Authentication/actions";
import * as styled from "./styles/app";

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
  const { updateUser } = useUser();
  const [currentUser, setCurrentUser] = useState(null);

  const handleCurrentUser = (user: UserObject) => setCurrentUser(user);
  const token = sessionStorage.getItem("token") || null;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(token);
      updateUser(response);
      setCurrentUser(response);
    };

    if (!currentUser) {
      fetchUser();
    }
  }, [currentUser]);

  return (
    <div>
      <ToastContainer />
      {!token ? (
        <SignIn onCurrentUser={handleCurrentUser} />
      ) : (
        <BrowserRouter>
          <styled.AppContainer>
            <styled.AppSideBar>
              <SideBar admin={currentUser?.admin} />
            </styled.AppSideBar>
            <styled.AppBody>
              <Routes>
                <Route
                  path={routes.home}
                  element={<HomePage admin={currentUser?.admin} />}
                />
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
                  element={
                    currentUser?.admin ? (
                      <ReportCasesComponent />
                    ) : (
                      <Link to="/" />
                    )
                  }
                />
              </Routes>
              <Routes>
                <Route
                  path={routes.reports_list}
                  element={
                    currentUser?.admin ? <ReportList /> : <Link to="/" />
                  }
                />
              </Routes>
              <Routes>
                <Route path={`${routes.report}/:id`} element={<Report />} />
              </Routes>
              <Routes>
                <Route path={routes.chat} element={<ChatAppComponent />} />
              </Routes>
              <Routes>
                <Route
                  path={routes.mail}
                  // element={currentUser.admin ? <MailBox /> : <Link to="/" />}
                  element={<MailBox />}
                />
              </Routes>
              <Routes>
                <Route element={<PageNotFound />} />
              </Routes>
            </styled.AppBody>
          </styled.AppContainer>
        </BrowserRouter>
      )}
    </div>
  );
};

export default PoliceApp;
