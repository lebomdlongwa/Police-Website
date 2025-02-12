defmodule ReportApp.Repo.Migrations.IncreaseMessageContentLength do
  use Ecto.Migration

  def change do
    alter table(:message) do
      modify :content, :text
    end
  end
end
