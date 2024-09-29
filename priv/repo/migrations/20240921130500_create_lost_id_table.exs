defmodule ReportApp.Repo.Migrations.CreateLostIdTable do
  use Ecto.Migration

  def change do
    create table(:lost_ids) do
      add :fullname, :string
      add :idNumber, :string
      add :dateLost, :string
      add :finder, :string

      timestamps()
    end
  end
end
