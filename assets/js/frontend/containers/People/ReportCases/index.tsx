import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "lodash";

import { ReportCase } from "./ReportCase";
import * as styled from "./styles/index";

import { getMissingReports } from "../ReportModal/actions";
import { Spinner } from "../../../components/Spinner";

export const ReportCasesComponent = () => {
  const [missingReports, setMissingReports] = useState([]);
  const { id: url_id } = useParams();
  const isIdValid = url_id && url_id !== ":id";

  const handleGetMissingReports = async () => {
    const response = await getMissingReports(url_id);
    setMissingReports(response);
  };

  useEffect(() => {
    if (isIdValid) {
      handleGetMissingReports();
    }
  }, []);

  return (
    <styled.Wrapper>
      <styled.ReportCasesWrapper center={isEmpty(missingReports)}>
        {isEmpty(missingReports) ? (
          <Spinner size={30} />
        ) : (
          missingReports.map((missingReport) => (
            <ReportCase report={missingReport} />
          ))
        )}
      </styled.ReportCasesWrapper>
    </styled.Wrapper>
  );
};
