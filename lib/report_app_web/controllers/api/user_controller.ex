defmodule ReportAppWeb.Api.UserController do
  use ReportAppWeb, :controller

  alias ReportApp.{Users}
  alias ReportApp.Guardian.Guardian
  alias ReportAppWeb.Api.UserView

  def new(conn, _params) do
    render(conn, "new.html")
  end

  def show(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    conn |> render(UserView, "show.json", %{user: user})
  end

  def create(conn, %{"credentials" => user_params}) do
    with {:ok, user} <- Users.create_user(user_params),
         {:ok, jwt, _claims} <- Guardian.encode_and_sign(user) do
      conn
      |> render(UserView, "show.json", %{user: user})
    end
  end

  def get_user(conn, %{"token" => token}) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        {:ok, user} = Guardian.resource_from_claims(claims)
        render(conn, "show.json", %{user: Map.put(user, :token, token)})

      {:error, reason} ->
        {:error, reason}
    end
  end
end
