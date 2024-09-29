defmodule ReportApp.Repo.Migrations.CreateReportTable do
  use Ecto.Migration

  def change do
    create table(:report) do
      add :informant, :string
      add :officer, :string
      add :grade, :string
      add :brief_circumstance, :string
      add :attendance, :boolean
      add :action_taken, :string
      add :accused, :string

      timestamps()
    end
  end
end
