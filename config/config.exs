# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :report_app,
  ecto_repos: [ReportApp.Repo]

# Configures the endpoint
config :report_app, ReportAppWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: ReportAppWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReportApp.PubSub,
  live_view: [signing_salt: "J0sie+s8"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :report_app, ReportApp.Mailer, adapter: Swoosh.Adapters.Local

# Swoosh API client is needed for adapters other than SMTP.
config :swoosh, :api_client, false

config :report_app, ReportApp.Guardian.Guardian,
  issuer: "report_app",
  secret_key: "t4/jeJm11JmOlQfZetBpWF/sanJozmAGIVnS4Jxy5yYOIRW6LqMAakS6/Djka7TP"

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.14.29",
  default: [
    args:
      ~w(js/app.jsx --bundle --target=es2020 --outdir=../priv/static/assets --external:/fonts/* --external:/images/* --loader:.svg=dataurl --loader:.png=dataurl --loader:.jpg=dataurl),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"

config :ueberauth, Ueberauth.Strategy.Google.OAuth,
  client_id: System.get_env("GOOGLE_CLIENT_ID"),
  client_secret: System.get_env("GOOGLE_CLIENT_SECRET")
