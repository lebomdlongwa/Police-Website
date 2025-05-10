defmodule ReportApp.Repo.Migrations.AddDefaultFalseToMessageSeen do
  use Ecto.Migration

  def change do
    alter table(:message) do
      modify :seen, :boolean, default: false
    end
  end
end
