import { httpDelete, httpGet, httpPost, httpPut } from "../requests";

const path = "/lost_ids";

export const fetchIds = () => httpGet(path);

export const createId = (params: IdPpParams) => {
  const toastMessages = {
    successMessage: "Id Item succesfully created",
    errorMessage: "Error while creating Id Item",
  };

  return httpPost(path, params, toastMessages);
};

export const updateId = (id: string, params: Partial<IdPpParams>) => {
  const url_object = { id, params };

  const toastMessages = {
    successMessage: "Id List succesfully updated",
    errorMessage: "Error while updating Id List",
  };

  return httpPut(path, url_object, toastMessages);
};

export const deleteId = (id: string) => {
  const toastMessages = {
    successMessage: "Id Item succesfully deleted",
    errorMessage: "Error while deleting Id Item",
  };

  return httpDelete(path, id, toastMessages);
};
