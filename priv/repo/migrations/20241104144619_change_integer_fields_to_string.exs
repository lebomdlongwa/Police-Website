defmodule ReportApp.Repo.Migrations.ChangeIntegerFieldsToString do
  use Ecto.Migration

  def change do
    alter table(:missing_person) do
      remove :age, :integer
      remove :height, :integer
      remove :weight, :integer

      add :age, :string
      add :height, :string
      add :weight, :string
    end
  end
end
