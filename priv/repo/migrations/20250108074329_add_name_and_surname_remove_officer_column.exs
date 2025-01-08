defmodule ReportApp.Repo.Migrations.AddNameAndSurnameRemoveOfficerColumn do
  use Ecto.Migration

  def change do
    alter table(:report) do
      remove :informant, :string

      add :name, :string
      add :surname, :string
    end
  end
end
