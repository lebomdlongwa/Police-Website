defmodule ReportApp.Repo.Migrations.AddMessageTable do
  use Ecto.Migration

  def change do
    create table(:message) do
      add :content, :string
      add :seen, :boolean

      add :author_id, references(:user, on_delete: :nilify_all)
      add :recipient_id, references(:user, on_delete: :nilify_all)
      add :thread_id, references(:thread, on_delete: :delete_all)

      timestamps()
    end

    create(index(:message, [:author_id, :recipient_id, :thread_id]))
  end
end
