defmodule ReportApp.Repo.Migrations.RemovePersonIdInReport do
  use Ecto.Migration

  def change do
    alter table(:missing_report) do
      remove :person_id, :string
      remove :missing_person_id, references(:missing_person)

      add :missing_person_id, references(:missing_person, type: :bigint)
    end
  end
end
