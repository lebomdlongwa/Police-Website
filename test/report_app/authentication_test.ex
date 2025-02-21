defmodule ReportApp.AuthenticationTest do
  use ReportApp.DataCase, async: true

  alias ReportApp.Users
  alias ReportApp.User

  import ReportApp.Fixtures

  describe "create_user/1" do
    test "with valid data creates user" do
      params = %{
        username: "thabamdlongwa",
        password: "some password"
      }

      assert {:ok, %User{} = user} = Users.create_user(params)
      assert {:ok, user} == Argon2.check_pass(user, "some password", hash_key: :password)
      assert user.username == "thabamdlongwa"
    end
  end

  describe "update_user/2" do
    test "with valid data updates the user" do
      params = %{
        username: "spiderman",
        password: "into_the_multiverse"
      }

      user = user_fixture()
      assert {:ok, %User{} = user} = Users.update_user(user, params)
      assert {:ok, user} == Argon2.check_pass(user, "into_the_multiverse", hash_key: :password)
      assert user.username == "spiderman"
    end
  end
end
