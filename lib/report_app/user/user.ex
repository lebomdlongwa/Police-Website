defmodule ReportApp.User do
  use Ecto.Schema

  import Ecto.Changeset

  alias Argon2
  alias ReportApp.Messenger.Schemas.{Thread, ThreadUser, Message}

  @manual_params [:name, :surname, :username, :password, :admin]
  @google_params [:email, :name, :surname]
  @params @google_params ++ @manual_params

  schema "user" do
    field :name, :string
    field :surname, :string
    field :username, :string
    field :email, :string
    field :password, :string
    field :avatar, :string
    field :admin, :boolean

    many_to_many :threads, Thread, join_through: ThreadUser
    has_many :messages, Message, foreign_key: :author_id

    timestamps()
  end

  def changeset(struct, %{"email" => email} = attrs) when is_binary(email) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@google_params)
    |> unique_constraint(:email)
  end

  def changeset(struct, %{"password" => password} = attrs) when is_binary(password) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@manual_params)
    |> put_password_hash()
  end

  defp put_password_hash(
         %Ecto.Changeset{valid?: true, changes: %{password: password, username: username}} =
           changeset
       )
       when is_binary(password) do
    change(changeset,
      password: Argon2.hash_pwd_salt(password),
      avatar: "#{String.first(username)}"
    )
  end

  defp put_password_hash(changeset), do: changeset
end
