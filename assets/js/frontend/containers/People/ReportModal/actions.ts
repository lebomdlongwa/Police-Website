import { httpGet, httpPost, httpPut, httpDelete } from "../../requests";

const path = "/missing_reports";

export const getMissingReports = (id: string): Promise<MissingReportParams[]> =>
  httpGet(path, { id });

export const addMissingReport = (params: MissingReportParams): Promise<void> =>
  httpPost(path, params);

export const updateMissingReport = (
  id: string,
  params: MissingReportParams
): Promise<MissingReportParams> => {
  const url_object = { id, params };
  const response = httpPut(path, url_object);

  return response;
};

export const deleteMissingReport = (id: string): Promise<void> =>
  httpDelete(path, id);
