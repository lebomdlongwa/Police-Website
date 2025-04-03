defmodule ReportAppWeb.Api.SessionController do
  use ReportAppWeb, :controller

  alias ReportApp.{Users, User}
  alias ReportApp.Guardian.Guardian
  alias ReportAppWeb.Api.{UserView, SessionView}

  def new(conn, _) do
    changeset = Users.change_user(%User{})
    maybe_user = Guardian.Plug.current_resource(conn)

    if maybe_user do
      render(conn, UserView, "show.json", %{user: maybe_user})
    else
      render(conn, "new.html", changeset: changeset, action: Routes.session_path(conn, :login))
    end
  end

  def login(conn, %{"credentials" => %{"username" => username, "password" => password}}) do
    Users.authenticate_user(username, password)
    |> login_reply(conn)
  end

  # This module's full name is Auth.Users.Guardian.Plug,
  # and the arguments specified in the Guardian.Plug.sign_out()
  # docs are not applicable here

  def logout(conn, _) do
    conn
    |> Guardian.Plug.sign_out()
  end

  # This module's full name is Auth.Users.Guardian.Plug,
  # and the arguments specified in the Guardian.Plug.sign_in()
  # docs are not applicable here.

  defp login_reply({:ok, user}, conn) do
    {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user)

    conn
    |> Guardian.Plug.sign_in(user)
    |> render(UserView, "show.json", %{user: Map.put(user, :token, jwt)})
  end

  defp login_reply({:error, reason}, conn) do
    conn
    |> render(SessionView, "index.json", %{reason: reason})
  end
end
