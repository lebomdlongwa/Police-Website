type ReportParams = {
  informant: string;
  officer: string;
  grade: string;
  accused: string;
  brief_circumstance: string;
};

type ReportItem = {
  informant: string;
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
