defmodule ReportApp.Mail do
  use Ecto.Schema

  alias ReportApp.MissingPerson.MissingPerson

  import Ecto.Changeset

  @person_report_params [
    :type,
    # :date_last_seen,
    :location_last_seen,
    :known_as,
    :clothes_worn,
    :brief_summary,
    :missing_person_id,
    :name,
    :surname
  ]

  @crime_report_params [
    :type,
    :name,
    :surname,
    :email,
    :accused,
    :brief_circumstance
  ]

  schema "mail" do
    field :type, :string

    field :date_last_seen, :string
    field :location_last_seen, :string
    field :known_as, :string
    field :clothes_worn, :string
    field :brief_summary, :string
    field :name, :string
    field :surname, :string
    field :email, :string
    field :accused, :string
    field :brief_circumstance, :string

    belongs_to :missing_person, MissingPerson

    timestamps()
  end

  def changeset(struct, %{"type" => "crime"} = attrs) do
    struct
    |> cast(attrs, @crime_report_params)
    |> validate_required(@crime_report_params)
  end

  def changeset(struct, %{"type" => "person"} = attrs) do
    struct
    |> cast(attrs, @person_report_params)
    |> validate_required(@person_report_params)
    |> assoc_constraint(:missing_person)
  end
end
