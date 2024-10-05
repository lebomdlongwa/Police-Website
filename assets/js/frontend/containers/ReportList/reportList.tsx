import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { Report } from "./report/report";
import { SearchIcon } from "../../components/icons/search";
import { Color } from "../../components/colorCodes";
import { ReportModalComponent } from "./ReportModal/reportModal";
import {
  createReport,
  deleteReport,
  fetchData,
  getReports,
  updateReport,
} from "./actions";

export const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleShowReportModal = () => setShowReportModal(!showReportModal);

  useEffect(() => {
    fetchData(getReports, setReportList);
  }, []);

  const handleAddReport = async (params: ReportParams) => {
    const response = await createReport(params);
    setReportList(response);
  };

  const handleUpdateReport = async (
    id: string,
    params: Partial<ReportParams>
  ) => {
    const response = await updateReport(id, params);
    setReportList(response);
  };

  const handleDeleteReport = async (id: string) => {
    const response = await deleteReport(id);
    setReportList(response);
  };

  return (
    <styled.ListWrapper>
      <styled.HeaderContainer>
        <styled.TopSubHeader>
          <styled.Title>Report Cases</styled.Title>
          <styled.AddItem text="Add Item" onClick={handleShowReportModal} />
        </styled.TopSubHeader>
        <styled.BottomSubHeader>
          <styled.SearchBox>
            <styled.SearchIcon>
              <SearchIcon h={22} w={22} c={Color.iconGray} />
            </styled.SearchIcon>
            <styled.SearchInput placeholder="Type some text to search..."></styled.SearchInput>
          </styled.SearchBox>
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      {reportList &&
        reportList.length > 0 &&
        reportList.map((report) => <Report report={report} />)}
      {showReportModal && (
        <ReportModalComponent
          showReportModal={handleShowReportModal}
          onCreate={handleAddReport}
          onUpdate={handleUpdateReport}
          onDelete={handleDeleteReport}
        />
      )}
    </styled.ListWrapper>
  );
};
