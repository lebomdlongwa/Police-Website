defmodule ReportApp.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      ReportApp.Repo,
      # Start the Telemetry supervisor
      ReportAppWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: ReportApp.PubSub},
      # Start the Endpoint (http/https)
      ReportAppWeb.Endpoint
      # Start a worker by calling: ReportApp.Worker.start_link(arg)
      # {ReportApp.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ReportApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ReportAppWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
