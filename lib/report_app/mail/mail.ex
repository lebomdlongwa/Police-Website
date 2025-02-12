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
    :missing_person_id
  ]

  @crime_report_params [
    :type,
    :name,
    :surname,
    :email,
    :accused,
    :brief_circumstance
  ]

  @params @person_report_params ++ @crime_report_params

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

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, @params)
    |> validate_required(required_params(attrs))
    |> assoc_constraint(association(attrs))
  end

  def required_params(%{"type" => "person"}), do: @person_report_params
  def required_params(%{"type" => "crime"}), do: @crime_report_params

  def association(%{"type" => "person"}), do: :missing_person
  def association(_), do: nil
end
