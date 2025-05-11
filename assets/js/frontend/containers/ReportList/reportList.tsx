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

  const handleSetReportList = (list: ReportItem[]) => setReportList(list);
  const handleShowReportModal = () => setShowReportModal(!showReportModal);
  const handleSetSearchIdNull = () => setSearchedReportId(null);

  const handleDisplaySearchedReportId = (id: string) => setSearchedReportId(id);

  useEffect(() => {
    fetchData(getReports, setReportList);
  }, []);

  const handleGetReports = (getType: SortByType) => {
    const params = {
      type: getType,
    };
    getReports(params)
      .then((response) => setReportList(response))
      .catch((err) => err);
  };

  const handleAddReport = (params: ReportParams) => {
    createReport(params)
      .then((response) => setReportList(response))
      .catch((err) => err);
  };

  const handleUpdateReport = (id: string, params: Partial<ReportParams>) =>
    updateReport(id, params)
      .then((report: ReportItem) => {
        const updatedList = reportList.map((item) => {
          if (item.id === report.id) {
            return {
              ...report,
            };
          } else {
            return item;
          }
        });

        return setReportList(updatedList);
      })
      .catch((err) => err);

  const handleDeleteReport = (id: string) => {
    deleteReport(id)
      .then((response) => setReportList(response))
      .catch((err) => err);
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
