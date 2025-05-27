defmodule ReportApp.MissingReport do
  use Ecto.Schema

  alias ReportApp.MissingPerson.MissingPerson

  import Ecto.Changeset

  @required_params [:location_last_seen, :clothes_worn, :missing_person_id, :date_last_seen]
  @params @required_params ++ [:known_as, :brief_summary]

  schema "missing_report" do
    field :date_last_seen, :string
    field :location_last_seen, :string
    field :known_as, :string
    field :clothes_worn, :string
    field :brief_summary, :string

    belongs_to :missing_person, MissingPerson

    timestamps()
  end

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@required_params)
    |> assoc_constraint(:missing_person)
  end
end
