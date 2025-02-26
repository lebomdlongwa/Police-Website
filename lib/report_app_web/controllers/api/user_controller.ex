defmodule ReportAppWeb.Api.UserController do
  use ReportAppWeb, :controller

  alias ReportApp.{Users}
  alias ReportApp.Guardian.Guardian
  alias ReportAppWeb.Api.UserView

  def new(conn, _params) do
    render(conn, "new.html")
  end

  def create(conn, %{"credentials" => user_params}) do
    with {:ok, user} <- Users.create_user(user_params) do
      conn
      |> Guardian.Plug.sign_in(user)
      |> put_status(:created)
      |> render(UserView, "show.json", %{user: user})
    end
  end

  def get_user(conn, params) do
    user =
      case Map.get(params, "id") do
        id when is_binary(id) ->
          Users.get_user!(id)

        _ ->
          get_session(conn, :user_id)
          |> Users.get_user!()
      end

    render(conn, "show.json", %{user: user})
  end
end
