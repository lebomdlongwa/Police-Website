defmodule ReportApp.Mail do
  use Ecto.Schema

  alias ReportApp.MissingPerson.MissingPerson

  import Ecto.Changeset

  @person_report_params [
    :type,
    :date_last_seen,
    :location_last_seen,
    :known_as,
    :clothes_worn,
    :brief_summary,
    :missing_person_id
  ]

  @crime_report_params [
    :type,
    :accused,
    :brief_circumstance
  ]

  @params [:rejected, :name, :surname]

  schema "mail" do
    field :type, :string
    field :date_last_seen, :string
    field :location_last_seen, :string
    field :known_as, :string
    field :clothes_worn, :string
    field :brief_summary, :string
    field :name, :string
    field :surname, :string
    field :accused, :string
    field :brief_circumstance, :string
    field :rejected, :boolean
    field :location, :map

    belongs_to :missing_person, MissingPerson

    timestamps()
  end

  def changeset(struct, %{"type" => "crime"} = attrs) do
    struct
    |> cast(attrs, @params ++ @crime_report_params)
    |> validate_required(@crime_report_params)
  end

  def changeset(struct, %{"type" => "person"} = attrs) do
    struct
    |> cast(attrs, @params ++ @person_report_params)
    |> validate_required(@person_report_params)
    |> assoc_constraint(:missing_person)
  end

  def changeset(%{type: "crime"} = struct, attrs) do
    struct
    |> cast(attrs, @params ++ @crime_report_params)
    |> validate_required(@crime_report_params)
  end

  def changeset(%{type: "person"} = struct, attrs) do
    struct
    |> cast(attrs, @params ++ @person_report_params)
    |> validate_required(@person_report_params)
    |> assoc_constraint(:missing_person)
  end
end
