import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/lost_ids";

export const fetchIds = async (): Promise<IdItem[]> => await httpGet(path);

export const createId = async (params: IdPpParams): Promise<IdItem[]> =>
  await httpPost(path, params);

export const updateId = async (
  id: string,
  params: Partial<IdPpParams>
): Promise<IdItem[]> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteId = async (id: string): Promise<IdItem[]> =>
  await httpDelete(path, id);
