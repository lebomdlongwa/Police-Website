defmodule ReportAppWeb.Api.ReportsView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.ReportsView

  def render("index.json", %{reports: reports}) do
    %{data: render_many(reports, ReportsView, "report.json")}
  end

  def render("show.json", %{report: report}) do
    %{data: render_one(report, ReportsView, "report.json")}
  end

  def render("report.json", %{report: report}) do
    %{
      informant: report.informant,
      officer: report.officer,
      grade: report.grade,
      brief_circumstance: report.brief_circumstance,
      attendance: report.attendance,
      action_taken: report.action_taken,
      accused: report.accused
    }
  end

  def render("delete.json", _) do
    %{
      success: true,
      message: "Report deleted successfully"
    }
  end
end
