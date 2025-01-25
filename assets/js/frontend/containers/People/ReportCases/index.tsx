import React, { useEffect, useState } from "react";
import * as styled from "./styles/index";
import { ReportCase } from "./ReportCase";
import { useParams } from "react-router-dom";
import { getMissingReports } from "../ReportModal/actions";
import { isEmpty } from "lodash";

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
      <styled.ReportCasesWrapper>
        {!isEmpty(missingReports) &&
          missingReports.map((missingReport) => (
            <ReportCase report={missingReport} />
          ))}
      </styled.ReportCasesWrapper>
    </styled.Wrapper>
  );
};
