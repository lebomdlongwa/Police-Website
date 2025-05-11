import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/mail";

export const getMails = (): Promise<Mail[]> => httpGet(path);

export const getMail = (id: string): Promise<Mail[] | Mail> =>
  httpGet(`${path}/${id}`);

export const createMail = (params: Mail): Promise<Mail[]> => {
  const toastMessages = {
    successMessage: "Missing Person report sent",
    errorMessage: "Error while sending Missing Person report",
  };

  return httpPost(path, params, toastMessages);
};

export const createReport = (
  params: CreateReportParams,
  isCrimeReport: boolean
) => {
  const toastMessages = {
    successMessage: `${
      isCrimeReport ? "Report Item" : "Missing Person Report"
    } succesfully created`,
    errorMessage: `Error while creating ${
      isCrimeReport ? "Report Item" : "Missing Report"
    }`,
  };

  return httpPost(path, params, toastMessages);
};

export const rejectMail = (
  id: string,
  params: Partial<CreateReportParams>
): Promise<Mail[]> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Mail Report succesfully rejected sent",
    errorMessage: "Error while rejecting Mail Report",
  };

  return httpPut(path, url_object, toastMessages);
};

export const deleteMail = (id: string): Promise<Mail[]> => httpDelete(path, id);
