defmodule ReportAppWeb.Api.ReportView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.ReportView

  def render("index.json", %{reports: reports}) do
    %{data: render_many(reports, ReportView, "report.json")}
  end

  def render("show.json", %{report: report}) do
    %{data: render_one(report, ReportView, "report.json")}
  end

  def render("report.json", %{report: report}) do
    %{
      id: report.id,
      name: report.name,
      surname: report.surname,
      officer: report.officer,
      grade: report.grade,
      brief_circumstance: report.brief_circumstance,
      # attendance: report.attendance,
      # action_taken: report.action_taken,
      accused: report.accused,
      report_date: Date.to_string(report.inserted_at)
    }
  end

  def render("delete.json", _) do
    %{
      success: true,
      message: "Report deleted successfully"
    }
  end
end
