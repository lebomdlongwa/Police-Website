import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { Report } from "./report/report";
import { ReportModalComponent } from "./ReportModal/reportModal";
import {
  createReport,
  deleteReport,
  getReports,
  updateReport,
} from "./actions";
import { fetchData } from "../requests";
import { SortByComponent } from "./sortBy";

export const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleShowReportModal = () => setShowReportModal(!showReportModal);

  useEffect(() => {
    fetchData(getReports, setReportList);
  }, []);

  const handleGetReports = async (getType: SortByType) => {
    const params = {
      type: getType,
    };
    const response = await getReports(params);
    setReportList(response);
  };

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
          <SortByComponent handleGetReports={handleGetReports} />
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      {reportList &&
        reportList.length > 0 &&
        reportList.map((report) => (
          <Report
            report={report}
            onUpdate={handleUpdateReport}
            onDelete={handleDeleteReport}
          />
        ))}
      {showReportModal && (
        <ReportModalComponent
          handleShowReportModal={handleShowReportModal}
          onCreate={handleAddReport}
          onUpdate={handleUpdateReport}
        />
      )}
    </styled.ListWrapper>
  );
};
