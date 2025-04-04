defmodule ReportApp.Reports do
  alias ReportApp.Report
  alias ReportApp.Repo

  import Ecto.Query

  def list_reports(params) do
    case Map.get(params, "type") do
      "grade" ->
        sort_report_by_grade()

      _ ->
        sort_report_list()
    end
  end

  def list_reports() do
    sort_report_list()
  end

  def sort_report_list() do
    Repo.all(
      from r in Report,
        order_by: [desc: r.inserted_at],
        select: r
    )
  end

  def sort_report_by_grade() do
    Enum.sort_by(Repo.all(Report), &get_grade_position(&1.grade))
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

  defp get_grade_position(grade) do
    case grade do
      "A" -> 1
      "B" -> 2
      "C" -> 3
      "D" -> 4
      "E" -> 5
      _ -> 6
    end
  end
end
