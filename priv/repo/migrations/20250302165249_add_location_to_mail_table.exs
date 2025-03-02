defmodule ReportApp.Repo.Migrations.AddLocationToMailTable do
  use Ecto.Migration

  def change do
    alter table(:mail) do
      add :location, :map
    end
  end
end
