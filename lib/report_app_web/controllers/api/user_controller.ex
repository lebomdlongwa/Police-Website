defmodule ReportAppWeb.Api.UserController do
  use ReportAppWeb, :controller

  alias ReportApp.{Repo, User}
  alias ReportApp.Guardian.Guardian
  alias ReportAppWeb.Api.UserView

  def new(conn, _params) do
    render(conn, "new.html")
  end

  def create(conn, %{"credentials" => user_params}) do
    changeset = User.changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        conn
        |> Guardian.Plug.sign_in(user)
        |> put_status(:created)
        |> render(UserView, "show.json", %{user: user})

      {:error, changeset} ->
        {:error, changeset}
    end
  end
end
