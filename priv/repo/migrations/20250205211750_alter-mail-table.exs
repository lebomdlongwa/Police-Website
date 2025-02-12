defmodule ReportApp.Repo.Migrations.AlterMailTable do
  use Ecto.Migration

  def change do
    alter table(:mail) do
      remove :person_id, :string
      add :missing_person_id, references(:missing_person, type: :bigint)
    end
  end
end
