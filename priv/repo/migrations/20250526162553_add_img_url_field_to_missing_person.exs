defmodule ReportApp.Repo.Migrations.AddImgUrlFieldToMissingPerson do
  use Ecto.Migration

  def change do
    alter table(:missing_person) do
      add :img_url, :string
    end
  end
end
