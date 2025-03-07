type Mail = {
  id?: string;
  type: "crime" | "person";
  date_last_seen?: string;
  location_last_seen?: string;
  known_as?: string;
  clothes_worn?: string;
  brief_summary?: string;
  missing_person_id?: string;
  name?: string;
  surname?: string;
  email?: string;
  accused?: string;
  brief_circumstance?: string;
  timestamp?: string;
  rejected?: boolean;
};

type CreateReportParams = {
  id: string;
  officer: string;
  grade?: string;
  rejected?: boolean;
};
