defmodule ReportApp.Messenger.Schemas.Message do
  use Ecto.Schema

  import Ecto.Changeset

  alias ReportApp.User
  alias ReportApp.Messenger.Schemas.{Thread}

  @derive {Jason.Encoder, only: [:id, :content, :inserted_at, :updated_at]}

  @required_params [:content, :author_id, :recipient_id]
  @params [:thread_id] ++ @required_params

  schema "message" do
    field :content, :string
    field :seen, :boolean, default: false

    belongs_to :author, User
    belongs_to :recipient, User
    belongs_to :thread, Thread

    timestamps()
  end

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@required_params)
    |> assoc_constraint(:author)
    |> assoc_constraint(:thread)
  end
end
