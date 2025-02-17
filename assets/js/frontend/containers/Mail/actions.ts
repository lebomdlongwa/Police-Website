import { httpDelete, httpGet, httpPost } from "../requests";

const path = "/mail";

export const getMails = async (): Promise<Mail[] | Mail> =>
  await httpGet(path);

export const getMail = async (id: string): Promise<Mail[] | Mail> =>
  await httpGet(`${path}/${id}`);

export const createMail = async (params: Mail): Promise<Mail[]> =>
  await httpPost(path, params);

export const createReport = async (id: string) => await httpPost(path, { id });

export const deleteMail = async (id: string): Promise<Mail[]> =>
  await httpDelete(path, id);
