defmodule ReportApp.Fixtures do
  alias ReportApp.Users

  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        username: "avengars",
        password: "thanos123",
        name: "Tony",
        surname: "Stark",
        email: "tony_stark@gmail.com"
      })
      |> Users.create_user()

    user
  end
end
