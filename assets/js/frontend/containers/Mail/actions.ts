import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/mail";

export const getMails = async (): Promise<Mail[] | Mail> => await httpGet(path);

export const getMail = async (id: string): Promise<Mail[] | Mail> =>
  await httpGet(`${path}/${id}`);

export const createMail = async (params: Mail): Promise<Mail[]> => {
  const toastMessages = {
    successMessage: "Missing Person report sent",
    errorMessage: "Error while sending Missing Person report",
  };

  return await httpPost(path, params, toastMessages);
};

export const createReport = async (
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

  return await httpPost(path, params, toastMessages);
};

export const rejectMail = async (
  id: string,
  params: Partial<CreateReportParams>
): Promise<Mail[]> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Mail Report succesfully rejected sent",
    errorMessage: "Error while rejecting Mail Report",
  };

  return await httpPut(path, url_object, toastMessages);
};

export const deleteMail = async (id: string): Promise<Mail[]> =>
  await httpDelete(path, id);
