defmodule ReportApp.Repo.Migrations.AlterIdTypeInCiminalTable do
  use Ecto.Migration

  def change do
    alter table(:criminals) do
      modify :id, :uuid, default: fragment("uuid_generate_v4()")
    end
  end
end
