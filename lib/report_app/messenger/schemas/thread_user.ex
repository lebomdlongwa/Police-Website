defmodule ReportApp.Messenger.Schemas.ThreadUser do
  use Ecto.Schema

  import Ecto.Changeset

  alias ReportApp.{User, Repo}
  alias ReportApp.Messenger.Schemas.{Thread}

  # @derive {Jason.Encoder, only: [:id, :thread_id, :user_id]}
  @params [:thread_id, :user_id]

  schema "thread_user" do
    belongs_to :thread, Thread
    belongs_to :user, User

    timestamps()
  end

  def create(%Thread{id: thread_id}, user_ids) do
    uniq_user_ids =
      user_ids
      |> Enum.uniq()

    Enum.map(uniq_user_ids, fn user_id ->
      %__MODULE__{thread_id: thread_id, user_id: user_id}
      |> changeset()
      |> Repo.insert()
    end)
  end

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@params)
    |> assoc_constraint(:thread)
    |> assoc_constraint(:user)
    |> unique_constraint(:thread_users, name: :unique_thread_user_idx)
  end
end
