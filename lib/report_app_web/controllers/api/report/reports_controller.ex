defmodule ReportAppWeb.Api.ReportController do
  use ReportAppWeb, :controller

  alias ReportApp.{
    Reports,
    Report
  }

  def index(conn, _params) do
    reports = Reports.list_reports(conn.query_params)
    render(conn, "index.json", reports: reports)
  end

  def show(conn, %{"id" => id}) do
    report = Reports.get_report!(id)
    render(conn, "show.json", report: report)
  end

  def create(conn, %{"params" => params}) do
    with {:ok, %Report{}} <- Reports.create_report(params) do
      reports = Reports.list_reports()
      render(conn, "index.json", reports: reports)
    end
  end

  def update(conn, %{"id" => id, "params" => params}) do
    report = Reports.get_report!(id)

    with {:ok, %Report{}} <- Reports.update_report(report, params) do
      reports = Reports.list_reports()
      render(conn, "index.json", reports: reports)
    end
  end

  def delete(conn, %{"id" => id}) do
    report = Reports.get_report!(id)

    with {:ok, %Report{}} <- Reports.delete_report(report) do
      reports = Reports.list_reports()
      render(conn, "index.json", reports: reports)
    end
  end
end
