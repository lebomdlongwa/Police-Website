import { httpDelete, httpGet, httpPost, httpPut } from "../../../requests";

const path = "/missing_people";

export const getMissingPersons = async (): Promise<MissingPersonParams[]> =>
  await httpGet(path);

export const getMissingPerson = async (
  id: string
): Promise<MissingPersonParams> => await httpGet(`${path}/${id}`);

export const addMissingPerson = async (
  params: MissingPersonParams
): Promise<void> => {
  const toastMessages = {
    successMessage: "Missing Person succesfully created",
    errorMessage: "Error while creating Missing Person",
  };

  return await httpPost(path, params, toastMessages);
};

export const updateMissingPerson = async (
  id: string,
  params: MissingPersonParams
): Promise<MissingPersonParams> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Missing Person succesfully updated",
    errorMessage: "Error while updating Missing Person",
  };

  return await httpPut(path, url_object, toastMessages);
};

export const deleteMissingPerson = async (id: string): Promise<void> => {
  const toastMessages = {
    successMessage: "Missing Person succesfully deleted",
    errorMessage: "Error while deleting Missing Person",
  };

  return await httpDelete(path, id);
};
