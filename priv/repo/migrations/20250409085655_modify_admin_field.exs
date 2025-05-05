defmodule ReportApp.Repo.Migrations.ModifyAdminField do
  use Ecto.Migration

  def change do
    alter table(:user) do
      modify :admin, :boolean, default: false
    end
  end
end
