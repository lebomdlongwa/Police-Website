defmodule ReportApp.Reports do
  alias ReportApp.Report
  alias ReportApp.Repo

  import Ecto.Query

  def list_reports() do
    sort_report_list()
  end

  def sort_report_list() do
    report_list =
      Repo.all(
        from r in Report,
        order_by: [desc: r.inserted_at],
        select: r
      )
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
