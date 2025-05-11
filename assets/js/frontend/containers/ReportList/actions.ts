import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/reports";

export const getReports = (params?: {
  type: SortByType;
}): Promise<ReportItem[]> => httpGet(path, params);

export const createReport = (params: ReportParams): Promise<ReportItem[]> => {
  const toastMessages = {
    successMessage: "Report Item succesfully created",
    errorMessage: "Error while creating Report Item",
  };

  return httpPost(path, params, toastMessages);
};

export const updateReport = (
  id: string,
  params: Partial<ReportParams>
): Promise<ReportItem> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Report List succesfully updated",
    errorMessage: "Error while updating Report List",
  };

  return httpPut(path, url_object, toastMessages);
};

export const deleteReport = (id: string): Promise<ReportItem[]> => {
  const toastMessages = {
    successMessage: "Report Item succesfully deleted",
    errorMessage: "Error while deleting Report Item",
  };

  return httpDelete(path, id, toastMessages);
};
