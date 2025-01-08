defmodule ReportApp.Repo.Migrations.CreateMissingPersonTable do
  use Ecto.Migration

  def change do
    create table(:missing_person) do
      add :fullname, :string
      add :age, :integer
      add :last_seen, :string
      add :last_place_seen, :string
      add :clothes, :string
      add :height, :integer
      add :weight, :integer
      add :body_stature, :string
      add :skin_colour, :string

      timestamps()
    end
  end
end
