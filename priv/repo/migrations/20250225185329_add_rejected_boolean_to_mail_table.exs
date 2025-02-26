defmodule ReportApp.Repo.Migrations.AddRejectedBooleanToMailTable do
  use Ecto.Migration

  def change do
    alter table(:mail) do
      add :rejected, :boolean
    end
  end
end
