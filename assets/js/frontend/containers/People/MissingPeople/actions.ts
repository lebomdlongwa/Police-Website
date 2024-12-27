import { httpDelete, httpGet, httpPost, httpPut } from "../../requests";

const path = "/missing_people";

export const getMissingPersons = async (): Promise<MissingPersonParams[]> =>
  await httpGet(path);

export const addMissingPerson = async (
  params: MissingPersonParams
): Promise<MissingPersonParams[]> => await httpPost(path, params);

export const updateMissingPerson = async (
  id: string,
  params: MissingPersonParams
): Promise<MissingPersonParams[]> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteMissingPerson = async (
  id: string
): Promise<MissingPersonParams[]> => await httpDelete(path, id);
