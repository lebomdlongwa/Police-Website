defmodule ReportApp.User do
  use Ecto.Schema

  alias Argon2

  import Ecto.Changeset

  @required_params [:username, :password]
  @params @required_params ++ [:name, :surname, :email]

  schema "user" do
    field :name, :string
    field :surname, :string
    field :username, :string
    field :email, :string
    field :password, :string

    timestamps()
  end

  def changeset(struct, attrs) do
    struct
    |> cast(attrs, @params)
    |> validate_required(@required_params)
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
    |> put_password_hash()
  end

  defp put_password_hash(
         %Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset
       ) do
    change(changeset, password: Argon2.hash_pwd_salt(password))
  end

  defp put_password_hash(changeset), do: changeset
end
