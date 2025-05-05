defmodule ReportApp.Repo.Migrations.DropMessageThreadParticipantRelatedTables do
  use Ecto.Migration

  def up do
    drop table(:thread_participant)
    drop table(:message)
    drop table(:thread)
    drop table(:participants)
  end

  def down do
  end
end
