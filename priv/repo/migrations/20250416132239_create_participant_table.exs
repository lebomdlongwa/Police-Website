defmodule ReportApp.Repo.Migrations.CreateParticipantTable do
  use Ecto.Migration

  def change do
    create table(:participants, primary_key: false) do
      add :custom_id, :string, primary_key: true
      add :user_id, references(:user, on_delete: :delete_all)

      timestamps()
    end

    create index(:participants, [:user_id])
  end
end
