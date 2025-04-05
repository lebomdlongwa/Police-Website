import React, { useEffect, useState } from "react";

import { isEmpty } from "lodash";

import { Report } from "./report/report";
import * as styled from "./styles";
import { ReportModalComponent } from "./ReportModal/reportModal";
import {
  createReport,
  deleteReport,
  getReports,
  updateReport,
} from "./actions";
import { SortByComponent } from "./sortBy";

import { fetchData } from "../requests";
import { SearchedResultComponent } from "../../components/SearchedResult";
import { Spinner } from "../../components/Spinner";

export const ReportList = () => {
  const [reportList, setReportList] = useState([]);
  const [showReportModal, setShowReportModal] = useState(false);
  const [searchedReportId, setSearchedReportId] = useState<string>(null);

  const handleShowReportModal = () => setShowReportModal(!showReportModal);
  const handleSetSearchIdNull = () => setSearchedReportId(null);

  const handleDisplaySearchedReportId = (id: string) => setSearchedReportId(id);

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

  const showReportList =
    reportList && !searchedReportId && reportList.length > 0;

  return (
    <styled.ListWrapper>
      <styled.HeaderContainer>
        <styled.TopSubHeader>
          <styled.Title>Report Cases</styled.Title>
          <styled.AddItem text="Add Item" onClick={handleShowReportModal} />
        </styled.TopSubHeader>
        <styled.BottomSubHeader>
          <SortByComponent
            handleGetReports={handleGetReports}
            reportList={reportList}
            handleDisplaySearchedReportId={handleDisplaySearchedReportId}
          />
        </styled.BottomSubHeader>
      </styled.HeaderContainer>
      <styled.BodyContainer center={isEmpty(reportList)}>
        {isEmpty(reportList) ? (
          <Spinner size={30} />
        ) : (
          <>
            {showReportList &&
              reportList.map((report) => (
                <Report
                  report={report}
                  onUpdate={handleUpdateReport}
                  onDelete={handleDeleteReport}
                />
              ))}
            {searchedReportId && (
              <SearchedResultComponent
                list={reportList}
                listName="Report"
                setSearchedIdNull={handleSetSearchIdNull}
                searchedId={searchedReportId}
                SearchedComponent={Report}
                itemName="report"
              />
            )}
            {showReportModal && (
              <ReportModalComponent
                handleShowReportModal={handleShowReportModal}
                onCreate={handleAddReport}
                onUpdate={handleUpdateReport}
              />
            )}
          </>
        )}
      </styled.BodyContainer>
    </styled.ListWrapper>
  );
};
