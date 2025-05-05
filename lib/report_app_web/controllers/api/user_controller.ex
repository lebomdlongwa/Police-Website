defmodule ReportAppWeb.Api.UserController do
  use ReportAppWeb, :controller

  alias ReportApp.{Users}
  alias ReportApp.Guardian.Guardian
  alias ReportAppWeb.Api.UserView

  def index(conn, _params) do
    users = Users.list_users()
    render(conn, "index.json", %{users: users})
  end

  def show(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    render(conn, "show.json", %{user: user})
  end

  def create(conn, %{"credentials" => user_params}) do
    with {:ok, user} <- Users.create_user(user_params),
         {:ok, jwt, _claims} <- Guardian.encode_and_sign(user) do
      render(conn, "show.json", %{user: Map.put(user, :token, jwt)})
    end
  end

  def get_user(conn, %{"token" => token}) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        {:ok, user} = Guardian.resource_from_claims(claims)

        conn
        |> put_session(:user_id, user.id)
        |> render("show.json", %{user: Map.put(user, :token, token)})

      {:error, reason} ->
        {:error, reason}
    end
  end
end
