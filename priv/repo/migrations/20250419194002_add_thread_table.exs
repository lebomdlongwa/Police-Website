defmodule ReportApp.Repo.Migrations.AddThreadTable do
  use Ecto.Migration

  def change do
    create table(:thread) do
      timestamps()
    end
  end
end
