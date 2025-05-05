import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/lost_ids";

export const fetchIds = async () => await httpGet(path);

export const createId = async (params: IdPpParams) => {
  const toastMessages = {
    successMessage: "Id Item succesfully created",
    errorMessage: "Error while creating Id Item",
  };

  return await httpPost(path, params, toastMessages);
};

export const updateId = async (id: string, params: Partial<IdPpParams>) => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Id List succesfully updated",
    errorMessage: "Error while updating Id List",
  };

  return await httpPut(path, url_object, toastMessages);
};

export const deleteId = async (id: string) => {
  const toastMessages = {
    successMessage: "Id Item succesfully deleted",
    errorMessage: "Error while deleting Id Item",
  };

  return await httpDelete(path, id, toastMessages);
};
