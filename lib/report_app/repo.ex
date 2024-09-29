defmodule ReportApp.Repo do
  use Ecto.Repo,
    otp_app: :report_app,
    adapter: Ecto.Adapters.Postgres
end
