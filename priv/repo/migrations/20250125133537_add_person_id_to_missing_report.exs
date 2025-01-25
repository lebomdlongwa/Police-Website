defmodule ReportApp.Repo.Migrations.AddPersonIdToMissingReport do
  use Ecto.Migration

  def change do
    alter table(:missing_report) do
      add :person_id, :string
    end
  end
end
