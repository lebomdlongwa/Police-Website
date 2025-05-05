defmodule ReportApp.Repo.Migrations.AddThreadUserTable do
  use Ecto.Migration

  def change do
    create table(:thread_user) do
      add :thread_id, references(:thread, on_delete: :delete_all)
      add :user_id, references(:user, on_delete: :delete_all)

      timestamps()
    end

    create(index(:thread_user, [:thread_id, :user_id]))
  end
end
