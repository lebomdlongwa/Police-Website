defmodule ReportApp.Guardian.Guardian do
  use Guardian, otp_app: :report_app

  alias ReportApp.Users

  def subject_for_token(%{id: user_id}, _claims) do
    {:ok, to_string(user_id)}
  end

  def subject_for_token(_, _) do
    {:error, :reason_for_error}
  end

  def resource_from_claims(%{"sub" => id}) do
    case Users.get_user!(id) do
      nil -> {:error, :user_not_found}
      user -> {:ok, user}
    end
  rescue
    Ecto.NoResultsError -> {:error, :user_not_found}
  end

  def resource_from_claims(_claims) do
    {:error, :reason_for_error}
  end
end
