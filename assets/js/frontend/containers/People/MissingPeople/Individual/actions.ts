import { httpDelete, httpGet, httpPost, httpPut } from "../../../requests";

const path = "/missing_people";

export const getMissingPersons = (): Promise<MissingPersonParams[]> =>
  httpGet(path);

export const getMissingPerson = (id: string): Promise<MissingPersonParams> =>
  httpGet(`${path}/${id}`);

export const addMissingPerson = (
  params: MissingPersonParams
): Promise<void> => {
  const toastMessages = {
    successMessage: "Missing Person succesfully created",
    errorMessage: "Error while creating Missing Person",
  };

  return httpPost(path, params, toastMessages);
};

export const updateMissingPerson = (
  id: string,
  params: MissingPersonParams
): Promise<MissingPersonParams> => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Missing Person succesfully updated",
    errorMessage: "Error while updating Missing Person",
  };

  return httpPut(path, url_object, toastMessages);
};

export const deleteMissingPerson = (id: string): Promise<void> => {
  const toastMessages = {
    successMessage: "Missing Person succesfully deleted",
    errorMessage: "Error while deleting Missing Person",
  };

  return httpDelete(path, id);
};
