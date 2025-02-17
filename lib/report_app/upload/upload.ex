defmodule ReportApp.Upload do
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:file_path, :type, :name]

  schema "upload" do
    field :file_path, :string
    field :type, :string
    field :name, :string

    timestamps()
  end

  def changeset(struct, attrs) do
    struct
    |> cast(attrs, @required_params)
    |> validate_required(@required_params)
  end
end
