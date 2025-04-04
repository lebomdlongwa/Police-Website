defmodule ReportApp.Repo.Migrations.AddAdminFieldToUserTable do
  use Ecto.Migration

  def change do
    alter table(:user) do
      add :admin, :boolean, default: true
    end
  end
end
