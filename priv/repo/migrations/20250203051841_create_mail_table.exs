defmodule ReportApp.Repo.Migrations.CreateMailTable do
  use Ecto.Migration

  def change do
    create table(:mail) do
      add :type, :string

      add :date_last_seen, :string
      add :location_last_seen, :string
      add :known_as, :string
      add :clothes_worn, :string
      add :brief_summary, :string
      add :person_id, :string

      add :name, :string
      add :surname, :string
      add :email, :string
      add :accused, :string
      add :brief_circumstance, :string

      timestamps()
    end
  end
end
