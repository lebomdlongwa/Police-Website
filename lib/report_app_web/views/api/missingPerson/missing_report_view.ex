defmodule ReportAppWeb.Api.MissingReportView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.MissingReportView

  def render("index.json", %{missing_reports: missing_reports}) do
    %{data: render_many(missing_reports, MissingReportView, "missing_report.json")}
  end

  def render("show.json", %{missing_report: missing_report}) do
    %{data: render_one(missing_report, MissingReportView, "missing_report.json")}
  end

  def render("missing_report.json", %{missing_report: missing_report}) do
    %{
      id: missing_report.id,
      known_as: missing_report.known_as,
      date_last_seen: missing_report.date_last_seen,
      location_last_seen: missing_report.location_last_seen,
      clothes_worn: missing_report.clothes_worn,
      brief_summary: missing_report.brief_summary,
      missing_person_id: missing_report.missing_person_id
    }
  end

  def render("delete.json", _) do
    %{
      success: true,
      message: "Missing Person Report deleted successfully"
    }
  end
end
