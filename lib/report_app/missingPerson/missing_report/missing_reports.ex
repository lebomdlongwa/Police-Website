defmodule ReportApp.MissingReports do
  alias ReportApp.MissingReport
  alias ReportApp.Repo

  import Ecto.Query

  def get_missing_reports_by(params) do
    id = Map.get(params, "id")

    if is_nil(id) do
      Repo.all(MissingReport)
    else
      Repo.all(
        from mr in MissingReport,
          where: mr.person_id == ^id,
          select: mr
      )
    end
  end

  def get_missing_report!(id) do
    Repo.get!(MissingReport, id)
  end

  def create_missing_report(params) do
    %MissingReport{}
    |> MissingReport.changeset(params)
    |> Repo.insert()
  end

  def update_missing_report(missing_report, params) do
    missing_report
    |> MissingReport.changeset(params)
    |> Repo.update()
  end

  def delete_missing_report(missing_report) do
    Repo.delete(missing_report)
  end
end
