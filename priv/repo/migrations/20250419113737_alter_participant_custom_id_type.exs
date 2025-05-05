defmodule ReportApp.Repo.Migrations.AlterParticipantCustomIdType do
  use Ecto.Migration

  def change do
    alter table(:thread_participant) do
      modify :participant_custom_id, :string
    end
  end
end
