defmodule ReportApp.MissingPerson.MissingPerson do
  use Ecto.Schema

  import Ecto.Changeset

  @required_params [:fullname, :age, :last_seen, :last_place_seen, :skin_colour, :body_stature]
  @params @required_params ++ [:clothes, :height, :weight]

  schema "missing_person" do
    field :fullname, :string
    field :age, :string
    field :last_seen, :string
    field :last_place_seen, :string
    field :clothes, :string
    field :height, :string
    field :weight, :string
    field :body_stature, :string
    field :skin_colour, :string

    timestamps()
  end

  def changeset(struct, attrs) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@required_params)
  end

end
