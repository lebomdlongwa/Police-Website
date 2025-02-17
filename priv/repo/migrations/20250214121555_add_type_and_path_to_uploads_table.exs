defmodule ReportApp.Repo.Migrations.AddTypeAndPathToUploadsTable do
  use Ecto.Migration

  def change do
    alter table(:upload) do
      add :type, :string
      add :name, :string
    end
  end
end
