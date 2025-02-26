import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/mail";

export const getMails = async (): Promise<Mail[] | Mail> => await httpGet(path);

export const getMail = async (id: string): Promise<Mail[] | Mail> =>
  await httpGet(`${path}/${id}`);

export const createMail = async (params: Mail): Promise<Mail[]> =>
  await httpPost(path, params);

export const createReport = async (params: CreateReportParams) =>
  await httpPost(path, params);

export const rejectMail = async (
  id: string,
  params: Partial<CreateReportParams>
): Promise<Mail[]> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteMail = async (id: string): Promise<Mail[]> =>
  await httpDelete(path, id);
