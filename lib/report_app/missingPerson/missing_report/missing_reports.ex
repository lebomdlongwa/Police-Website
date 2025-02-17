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
          where: mr.missing_person_id == ^id,
          select: mr
      )
    end
  end

  def get_missing_report!(id) do
    Repo.get!(MissingReport, id)
  end

  def delete_missing_report(missing_report) do
    Repo.delete(missing_report)
  end
end
