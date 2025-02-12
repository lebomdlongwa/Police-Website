defmodule ReportApp.Messages.Message do
  use Ecto.Schema

  import Ecto.Changeset

  # @derive {Jason.Encoder, only: [:id, :content, :inserted_at, :updated_at]}

  @params [:content]

  schema "message" do
    field :content, :string

    # belongs_to :user, User

    timestamps()
  end

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@params)
  end
end
