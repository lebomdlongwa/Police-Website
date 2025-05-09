type ReportParams = {
  name: string;
  surname: string;
  officer: string;
  grade: string;
  accused: string;
  brief_circumstance: string;
  crime_type: CrimeType;
  solved?: boolean;
};

type CrimeType = "theft" | "murder" | "assult" | "phyicalAbuse" | "childAbuse";

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
  action_taken: string;
  crime_type: CrimeType;
  solved: boolean;
};

type ReportsList = {
  data: ReportItem[];
};
