defmodule ReportApp.Repo.Migrations.CreateThreadTable do
  use Ecto.Migration

  def change do
    create table(:thread) do
      timestamps()
    end
  end
end
