defmodule ReportApp.Reports do
  alias ReportApp.Report
  alias ReportApp.Repo

  def list_reports() do
    Repo.all(Report)
  end

  def get_report!(id) do
    Repo.get!(Report, id)
  end

  def create_report(attrs) do
    %Report{}
    |> Report.changeset(attrs)
    |> Repo.insert()
  end

  def update_report(%Report{} = report, attrs) do
    report
    |> Report.changeset(attrs)
    |> Repo.update()
  end

  def delete_report(%Report{} = report) do
    Repo.delete(report)
  end
end
