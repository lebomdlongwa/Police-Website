defmodule ReportAppWeb.GoogleAuthController do
  use ReportAppWeb, :controller
  plug Ueberauth

  alias ReportApp.{Repo, User, Users}

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _) do
    user_params = %{
      email: auth.info.email,
      name: auth.info.first_name,
      surname: auth.info.last_name,
      token: auth.credentials.token,
      avatar: auth.info.image
    }

    sign_in(conn, user_params)
  end

  def callback(%{assigns: %{ueberauth_failure: _}}, _params), do: nil

  defp sign_in(conn, user_params) do
    case create_or_sign_in(user_params) do
      {:ok, user} ->
        conn
        |> put_session(:user_id, user.id)
        |> redirect(to: "/")

      {:error, _} ->
        conn
        |> put_session(:user_id, nil)
        |> redirect(to: "/")
    end
  end

  defp create_or_sign_in(%{email: email} = user_params) do
    case Repo.get_by(User, email: email) do
      nil ->
        Users.create_user(user_params)

      user ->
        {:ok, user}
    end
  end

  def signout(conn, _params) do
    conn
    |> clear_session()
  end
end
