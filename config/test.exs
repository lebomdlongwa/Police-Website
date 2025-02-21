import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :report_app, ReportApp.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "report_app_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :report_app, ReportAppWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "roCvN43ImmwltIeFjYImu5vbgzWjdAMmPMCw/lMb5EV10EwXeAtVsyYdfYt1fKGu",
  server: false

# In test we don't send emails.
config :report_app, ReportApp.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime

config :guardian, Guardian,
  allowed_algos: ["HS512"],
  secret_key: "t4/jeJm11JmOlQfZetBpWF/sanJozmAGIVnS4Jxy5yYOIRW6LqMAakS6/Djka7TP"
