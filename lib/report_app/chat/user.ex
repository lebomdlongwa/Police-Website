defmodule ReportApp.Chat.User do
  use Ecto.Schema

  import Ecto.Changeset

  @required_params [:name, :surname, :email, :password]

  schema "user" do
    field :name, :string
    field :surname, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps()
  end

  def changeset(struct, attrs) do
    struct
    |> cast(attrs, @required_params)
    |> validate_required(@required_params)
    |> unique_constraint(:email)
    |> put_password_hash()
  end

  defp put_password_hash(changeset) do
    case changeset.valid? do
      true ->
        case changeset.data[:password] do
          password ->
            put_change(changeset, :password_hash, Comeonin.Argon2.hashpwd_salt(password))

          nil ->
            changeset
        end

      false ->
        changeset
    end
  end
end
