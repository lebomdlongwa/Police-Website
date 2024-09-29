type IdList = {
  data?: IdItem[];
};

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

export const fetchIds = async (): Promise<IdItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/lost_ids`);
    const responseJSON: IdList = await response.json();
    return responseJSON.data || [];
  } catch (err) {
    console.error("Error retrieving lost ids: ", err);
  }
};

export const createId = async (bodyParams: Params): Promise<IdItem[]> => {
  const params = {
    fullname: bodyParams.fullname,
    idNumber: bodyParams.idNumber,
    dateLost: bodyParams.dateLost,
  };

  try {
    const response = await fetch(`${baseUrl}/lost_ids`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ params }),
    });

    return fetchIds();
  } catch (err) {
    console.error("Error posting data: ", err);
  }
};

export const updateId = async (id: string, params: Partial<Params>) => {
  try {
    const response = await fetch(`${baseUrl}/lost_ids/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ params }),
    });

    return fetchIds();
  } catch (err) {
    console.error("Error updating data: ", err);
  }
};

export const deleteId = async (id: string): Promise<IdItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/lost_ids/${id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({ id }),
    });

    return fetchIds();
  } catch (err) {
    console.error("Error deleting data: ", err);
  }
};
