defmodule ReportApp.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:user) do
      add :name, :string
      add :surname, :string
      add :email, :string
      add :password_hash, :string

      timestamps()
    end

    create unique_index(:user, [:email])
  end
end
