defmodule ReportApp.Report do
  use Ecto.Schema

  import Ecto.Changeset

  @required_params [:name, :surname, :officer, :grade]
  @params @required_params ++ [:attendance, :action_taken, :accused, :brief_circumstance]

  schema "report" do
    field :name, :string
    field :surname, :string
    field :officer, :string
    field :grade, :string
    field :brief_circumstance, :string
    field :attendance, :boolean
    field :action_taken, :string
    field :accused, :string

    timestamps()
  end

  def changeset(report, attrs \\ %{}) do
    report
    |> cast(attrs, @params)
    |> validate_required(@required_params)
  end
end
