defmodule ReportAppWeb.PageController do
  use ReportAppWeb, :controller

  alias ReportApp.LostId

  def index(conn, _params) do
    lost_ids = LostId.list_lost_ids()
    render(conn, "index.html", props: Poison.encode!(%{lost_ids: lost_ids}))
  end
end
