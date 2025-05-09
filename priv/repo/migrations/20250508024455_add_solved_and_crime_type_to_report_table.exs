defmodule ReportApp.Repo.Migrations.AddSolvedAndCrimeTypeToReportTable do
  use Ecto.Migration

  def change do
    alter table(:report) do
      add :crime_type, :string
      add :solved, :boolean, default: false
    end
  end
end
