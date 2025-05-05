defmodule ReportApp.Repo.Migrations.AddTimestampsToCriminals do
  use Ecto.Migration

  def change do
    alter table(:criminals) do
      timestamps()
    end
  end
end
