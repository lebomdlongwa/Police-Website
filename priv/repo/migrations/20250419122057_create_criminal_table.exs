defmodule ReportApp.Repo.Migrations.CreateCriminalTable do
  use Ecto.Migration

  def change do
    create table(:criminals, primary_key: false) do
      add :id, :uuid, primary_key: true
    end
  end
end
