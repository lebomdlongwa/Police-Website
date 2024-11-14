type ReportParams = {
  name: string;
  surname: string;
  officer: string;
  grade: string;
  accused: string;
  brief_circumstance: string;
};

type SortByParams = {
  type: SortByType;
};

type SortByType = "officer" | "grade";

type ReportItem = {
  id: string;
  name: string;
  surname: string;
  officer: string;
  grade: string;
  accused: string;
  brief_circumstance: string;
  report_date?: string;
  case_number?: string;
};

type ReportsList = {
  data: ReportItem[];
};
