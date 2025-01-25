import { httpGet, httpPost, httpPut, httpDelete } from "../../requests";

const path = "/missing_reports";

export const getMissingReports = async (
  id: string
): Promise<MissingReportParams[]> => {
  return await httpGet(path, { id });
};

export const addMissingReport = async (
  params: MissingReportParams
): Promise<void> => {
  return await httpPost(path, params);
};

export const updateMissingReport = async (
  id: string,
  params: MissingReportParams
): Promise<MissingReportParams> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteMissingReport = async (id: string): Promise<void> =>
  await httpDelete(path, id);
