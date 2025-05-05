import { toast } from "react-toastify";

export const baseUrl = "http://localhost:4000/api";
const headers = { "Content-Type": "application/json" };

export const fetchData = async (getRequestFn: any, stateUpdateFn: any) => {
  try {
    const response = await getRequestFn();
    stateUpdateFn(response);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const httpGet = async (
  path: string,
  params?: string | Record<string, string>
) => {
  let queryString = "";

  if (params) {
    const searchParams = new URLSearchParams(params);
    queryString = `?${searchParams.toString()}`;
  }

  return new Promise((resolve, reject) =>
    fetch(`${baseUrl}${path}${queryString}`)
      .then((response) => response.json())
      .then((responseJSON) => resolve(responseJSON.data))
      .catch((error) => reject(error))
  );
};

type ToastMessages = {
  successMessage: string;
  errorMessage: string;
};

export const httpPost = (
  path: string,
  params: object,
  toastMessages?: ToastMessages
) =>
  toast.promise(
    new Promise((resolve, reject) =>
      fetch(`${baseUrl}${path}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ params }),
      })
        .then((response) => response.json())
        .then((responseJSON) => resolve(responseJSON.data))
        .catch((error) => reject(error))
    ),
    {
      success: toastMessages.successMessage,
      error: toastMessages.errorMessage,
    },
    {
      position: "bottom-left",
    }
  );

type UrlObject = {
  id: string;
  params: object;
};

export const httpPut = async (
  path: string,
  url_object: UrlObject,
  toastMessages?: ToastMessages
) => {
  const { id, params } = url_object;

  return toast.promise(
    new Promise((resolve, reject) =>
      fetch(`${baseUrl}${path}/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({ id, params }),
      })
        .then((response) => response.json())
        .then((responseJSON) => resolve(responseJSON.data))
        .catch((error) => reject(error))
    ),
    {
      success: toastMessages.successMessage,
      error: toastMessages.errorMessage,
    },
    {
      position: "bottom-left",
    }
  );
};

export const httpDelete = async (
  path: string,
  id: string,
  toastMessages?: ToastMessages
) =>
  toast.promise(
    new Promise((resolve, reject) =>
      fetch(`${baseUrl}${path}/${id}`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify({ id }),
      })
        .then((response) => response.json())
        .then((responseJSON) => resolve(responseJSON.data))
        .catch((error) => reject(error))
    ),
    {
      success: toastMessages.successMessage,
      error: toastMessages.errorMessage,
    },
    {
      position: "bottom-left",
    }
  );
