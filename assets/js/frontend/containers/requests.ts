const baseUrl = "http://localhost:4000/api";
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
  try {
    let queryString = "";

    if (params) {
      const searchParams = new URLSearchParams(params);
      queryString = `?${searchParams.toString()}`;
    }

    const response = await fetch(`${baseUrl}${path}${queryString}`);
    const responseJSON = await response.json();

    return responseJSON.data || [];
  } catch (err) {
    console.error("Error retrieving data: ", err);
  }
};

export const httpPost = async (path: string, params: object) => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ params }),
    });

    return httpGet(path);
  } catch (err) {
    console.error("Error posting data: ", err);
  }
};

type UrlObject = {
  id: string;
  params: object;
};

export const httpPut = async (path: string, url_object: UrlObject) => {
  const { id, params } = url_object;

  try {
    const response = await fetch(`${baseUrl}${path}/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ id, params }),
    });

    return httpGet(path);
  } catch (err) {
    console.error("Error updating data: ", err);
  }
};

export const httpDelete = async (path: string, id: string) => {
  try {
    const response = await fetch(`${baseUrl}${path}/${id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({ id }),
    });

    return httpGet(path);
  } catch (err) {
    console.error("Error deleting data: ", err);
  }
};
