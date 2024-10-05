import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/reports";

export const getReports = async (): Promise<ReportItem[]> =>
  await httpGet(path);

export const createReport = async (
  params: ReportParams
): Promise<ReportItem[]> => await httpPost(path, params);

export const updateReport = async (
  id: string,
  params: Partial<ReportParams>
): Promise<ReportItem[]> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteReport = async (id: string): Promise<ReportItem[]> =>
  await httpDelete(path, id);
