import { Dispatch } from "redux";
import { httpDelete, httpGet, httpPost, httpPut } from "../requests";
import {
  REPORT_LIST_FETCH_ERROR,
  REPORT_LIST_FETCH_REQUEST,
  REPORT_LIST_FETCH_SUCCESS,
} from "./constants";

const path = "/reports";

export const getReports = async (
  getParams?: SortByType
): Promise<ReportItem[]> => {
  const params = { type: getParams };
  const response = await httpGet(path, params);

  return response;
};

// export const getReports = (getParams?: SortByType) => {
//   return () =>
//     new Promise((resolve, reject) => {
//       // dispatch({ type: REPORT_LIST_FETCH_REQUEST });

//       const params = { type: getParams };

//       httpGet(path, params)
//         .then((response) => {
//           console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA", response);
//           // dispatch({
//           //   type: REPORT_LIST_FETCH_SUCCESS,
//           //   reportList: response,
//           // });

//           resolve(response);
//           // return response;
//         })
//         .catch((error) => {
//           // dispatch({
//           //   type: REPORT_LIST_FETCH_ERROR,
//           //   error,
//           // });

//           reject(error);
//         });
//     });
// };

export const createReport = async (
  params: ReportParams
): Promise<ReportItem[]> => await httpPost(path, params);

export const updateReport = async (
  id: string,
  params: Partial<ReportParams>
): Promise<ReportItem[]> => {
  const url_object = { id, params };
  const response = await httpPut(path, url_object);

  return response;
};

export const deleteReport = async (id: string): Promise<ReportItem[]> =>
  await httpDelete(path, id);
