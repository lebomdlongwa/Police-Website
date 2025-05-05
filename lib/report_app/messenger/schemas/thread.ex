defmodule ReportApp.Messenger.Schemas.Thread do
  use Ecto.Schema

  import Ecto.Changeset

  alias ReportApp.User
  alias ReportApp.Messenger.Schemas.{ThreadUser, Thread, Message}

  # @derive {Jason.Encoder, only: [:id]}

  schema "thread" do
    many_to_many :users, User, join_through: ThreadUser

    has_many :thread_users, ThreadUser
    has_many :messages, Message

    timestamps()
  end

  def changeset(struct, attrs \\ %{}) do
    struct
    |> cast(attrs, [])
  end

  def users_query(%Thread{} = thread) do
    Ecto.assoc(thread, [:users])
  end
end
