defmodule ReportApp.LostId.Id do
  use Ecto.Schema

  import Ecto.Changeset

  schema "lost_ids" do
    field :fullname, :string
    field :idNumber, :string
    field :dateLost, :string
    field :finder, :string

    timestamps()
  end

  def changeset(lost_id, attrs) do
    lost_id
    |> cast(attrs, [:fullname, :idNumber, :dateLost])
    |> validate_required([:fullname, :idNumber])
  end
end
