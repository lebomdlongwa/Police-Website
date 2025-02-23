defmodule ReportApp.Repo.Migrations.AddTokenAndAvatarToUser do
  use Ecto.Migration

  def change do
    alter table(:user) do
      add :avatar, :string
    end
  end
end
