import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/reports";

export const getReports = async (params?: {
  type: SortByType;
}): Promise<ReportItem[]> => await httpGet(path, params);

export const createReport = async (
  params: ReportParams
): Promise<ReportItem[]> => {
  const toastMessages = {
    successMessage: "Report Item succesfully created",
    errorMessage: "Error while creating Report Item",
  };

  return await httpPost(path, params, toastMessages);
};

export const updateReport = async (
  id: string,
  params: Partial<ReportParams>
): Promise<ReportItem[]> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Report List succesfully updated",
    errorMessage: "Error while updating Report List",
  };

  return await httpPut(path, url_object, toastMessages);
};

export const deleteReport = async (id: string): Promise<ReportItem[]> => {
  const toastMessages = {
    successMessage: "Report Item succesfully deleted",
    errorMessage: "Error while deleting Report Item",
  };

  return await httpDelete(path, id, toastMessages);
};
