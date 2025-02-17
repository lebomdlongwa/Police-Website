defmodule ReportApp.Repo.Migrations.CreateUploadTable do
  use Ecto.Migration

  def change do
    create table(:upload) do
      add :file_path, :string

      timestamps()
    end
  end
end
