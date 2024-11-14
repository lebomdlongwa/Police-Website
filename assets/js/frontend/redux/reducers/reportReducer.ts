import {
  REPORT_LIST_FETCH_ERROR,
  REPORT_LIST_FETCH_REQUEST,
  REPORT_LIST_FETCH_SUCCESS,
  REPORT_LIST_UPDATE_ERROR,
  REPORT_LIST_UPDATE_REQUEST,
  REPORT_LIST_UPDATE_SUCCESS,
  REPORT_LIST_DELETE_ERROR,
  REPORT_LIST_DELETE_REQUEST,
  REPORT_LIST_DELETE_SUCCESS,
} from "../../containers/ReportList/constants";

type State = {
  reportList: ReportItem[];
  isFetching: boolean;
  errors: any;
};

type Action = {
  type?: string;
  reportList?: ReportItem[] | ReportItem;
  errors?: any;
};

const initialState: State = {
  isFetching: false,
  reportList: [],
  errors: null,
};

export const reportListReducer = (
  state = initialState,
  action: Action = {}
) => {
  switch (action.type) {
    case REPORT_LIST_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case REPORT_LIST_FETCH_SUCCESS:
      return { ...state, reportList: action.reportList, isFetching: false };
    case REPORT_LIST_FETCH_ERROR:
      return { ...state, isFetching: false, errors: action.errors };

    case REPORT_LIST_UPDATE_REQUEST:
      return { ...state, isFetching: true };
    case REPORT_LIST_UPDATE_SUCCESS:
      return { ...state, reportList: action.reportList, isFetching: false };
    case REPORT_LIST_UPDATE_ERROR:
      return { ...state, isFetching: false, errors: action.errors };

    case REPORT_LIST_DELETE_REQUEST:
      return { ...state, isFetching: true };
    case REPORT_LIST_DELETE_SUCCESS:
      return { ...state, reportList: action.reportList, isFetching: false };
    case REPORT_LIST_DELETE_ERROR:
      return { ...state, isFetching: false, errors: action.errors };

    default:
      return state;
  }
};
