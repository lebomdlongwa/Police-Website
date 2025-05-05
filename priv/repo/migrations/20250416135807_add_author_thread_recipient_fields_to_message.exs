defmodule ReportApp.Repo.Migrations.AddAuthorThreadRecipientFieldsToMessage do
  use Ecto.Migration

  def change do
    alter table(:message) do
      add :author_id,
          references(:participants, column: :custom_id, type: :string, on_delete: :nilify_all)

      add :recipient_id,
          references(:participants, column: :custom_id, type: :string, on_delete: :nilify_all)

      add :thread_id, references(:thread, on_delete: :delete_all)
    end

    create index(:message, [:author_id])
    create index(:message, [:recipient_id])
    create index(:message, [:thread_id])
  end
end
