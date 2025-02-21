defmodule ReportApp.Repo.Migrations.CreateMessageTable do
  use Ecto.Migration

  def change do
    create table(:message) do
      add :content, :text

      timestamps()
    end
  end
end
