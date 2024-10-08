defmodule ReportApp.LostId.Id do
  use Ecto.Schema

  import Ecto.Changeset

  @required_params [:name, :surname, :idNumber]
  @params @required_params ++ [:finder, :dateLost]

  schema "lost_ids" do
    field :name, :string
    field :surname, :string
    field :idNumber, :string
    field :dateLost, :string
    field :finder, :string

    timestamps()
  end

  def changeset(lost_id, attrs) do
    lost_id
    |> cast(attrs, @params)
    |> validate_required(@required_params)
  end
end
