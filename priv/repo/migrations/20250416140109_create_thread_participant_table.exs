defmodule ReportApp.Repo.Migrations.CreateThreadParticipantTable do
  use Ecto.Migration

  def change do
    create table(:thread_participant) do
      add :thread_id, references(:thread, on_delete: :delete_all)

      add :participant_custom_id,
          references(:participants, column: :custom_id, type: :string, on_delete: :delete_all)

      timestamps()
    end

    create index(:thread_participant, [:thread_id])
    create index(:thread_participant, [:participant_custom_id])
  end
end
