defmodule ReportApp.Repo.Migrations.AddUsernameToUserTable do
  use Ecto.Migration

  def change do
    alter table(:user) do
      remove :password_hash, :string
      add :password, :string
    end
  end
end
