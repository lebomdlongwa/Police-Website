defmodule ReportAppWeb.Api.MissingReportController do
  use ReportAppWeb, :controller

  alias ReportApp.MissingReport
  alias ReportApp.MissingReports

  def index(conn, _params) do
    missing_reports = MissingReports.get_missing_reports_by(conn.query_params)
    render(conn, "index.json", missing_reports: missing_reports)
  end

  def show(conn, %{"id" => id}) when is_binary(id) do
    missing_report = MissingReports.get_missing_report!(id)
    render(conn, "index.json", missing_report: missing_report)
  end

  def create(conn, %{"params" => params}) do
    with {:ok, %MissingReport{} = missing_report} <- MissingReports.create_missing_report(params) do
      render(conn, "show.json", missing_report: missing_report)
    end
  end

  def update(conn, %{"id" => id, "params" => params}) do
    missing_report = MissingReports.get_missing_report!(id)

    with {:ok, %MissingReport{} = missing_report} <-
           MissingReports.update_missing_report(missing_report, params) do
      render(conn, "show.json", missing_report: missing_report)
    end
  end

  def delete(conn, %{"id" => id}) do
    missing_report = MissingReports.get_missing_report!(id)

    with {:ok, %MissingReport{}} <-
           MissingReports.delete_missing_report(missing_report) do
      render(conn, "delete.json", "")
    end
  end
end
