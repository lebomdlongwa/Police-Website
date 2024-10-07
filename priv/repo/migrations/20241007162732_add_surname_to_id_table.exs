defmodule ReportApp.Repo.Migrations.AddSurnameToIdTable do
  use Ecto.Migration

  def change do
    alter table(:lost_ids) do
      remove :fullname, :string
      add :name, :string
      add :surname, :string
    end
  end
end
