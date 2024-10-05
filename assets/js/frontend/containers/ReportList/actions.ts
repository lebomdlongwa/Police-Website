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

export const getReports = async (): Promise<ReportItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/reports`);
    const responseJSON: ReportsList = await response.json();

    return responseJSON.data || [];
  } catch (err) {
    console.error("Error retrieving reports: ", err);
  }
};

export const createReport = async (
  params: ReportParams
): Promise<ReportItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/reports`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ params }),
    });

    return getReports();
  } catch (err) {
    console.error("Error adding report: ", err);
  }
};

export const updateReport = async (
  id: string,
  params: Partial<ReportParams>
): Promise<ReportItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/reports/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ id, params }),
    });

    return getReports();
  } catch (err) {
    console.error("Error updating report: ", err);
  }
};

export const deleteReport = async (id: string): Promise<ReportItem[]> => {
  try {
    const response = await fetch(`${baseUrl}/reports/${id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({ id }),
    });

    return getReports();
  } catch (err) {
    console.error("Error deleting report: ", err);
  }
};
