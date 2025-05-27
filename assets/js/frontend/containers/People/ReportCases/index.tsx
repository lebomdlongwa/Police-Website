import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "lodash";

import { ReportCase } from "./ReportCase";
import * as styled from "./styles/index";

import { getMissingReports } from "../ReportModal/actions";
import { CircleLoader } from "../../../components/Spinner";
import { NoDataComponent } from "../../../components/NoData";

export const ReportCasesComponent = () => {
  const [missingReports, setMissingReports] = useState([]);
  const [noData, setNoData] = useState(false);
  const { id: url_id } = useParams();
  const isIdValid = url_id && url_id !== ":id";
  const isLoading = isEmpty(missingReports) && !noData;

  const handleGetMissingReports = () => {
    getMissingReports(url_id).then((response) => {
      setMissingReports(response);

      if (isEmpty(response)) {
        setNoData(true);
      }
    });
  };

  useEffect(() => {
    if (isIdValid) {
      handleGetMissingReports();
    }
  }, []);

  return (
    <styled.Wrapper>
      <styled.ReportCasesWrapper isLoading={isLoading} noData={noData}>
        {noData && <NoDataComponent />}
        {isLoading ? (
          <CircleLoader size={60} />
        ) : (
          missingReports.map((missingReport) => (
            <ReportCase report={missingReport} />
          ))
        )}
      </styled.ReportCasesWrapper>
    </styled.Wrapper>
  );
};
