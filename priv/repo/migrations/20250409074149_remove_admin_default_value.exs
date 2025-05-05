defmodule ReportApp.Repo.Migrations.RemoveAdminDefaultValue do
  use Ecto.Migration

  def change do
    alter table(:user) do
      modify :admin, :boolean, default: nil
    end
  end
end
