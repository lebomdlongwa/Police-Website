defmodule ReportApp.Repo.Migrations.CreateMissingReport do
  use Ecto.Migration

  def change do
    create table(:missing_report) do
      add :date_last_seen, :string
      add :location_last_seen, :string
      add :known_as, :string
      add :clothes_worn, :string
      add :brief_summary, :string
      add :missing_person_id, references(:missing_person)

      timestamps()
    end
  end
end
