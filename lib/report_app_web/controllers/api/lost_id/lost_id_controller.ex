defmodule ReportAppWeb.Api.LostIdController do
  use ReportAppWeb, :controller

  alias ReportApp.LostId
  alias ReportApp.LostId.Id

  def index(conn, _params) do
    lost_ids = LostId.list_lost_ids()
    render(conn, "index.json", lost_ids: lost_ids)
  end

  def show(conn, %{"id" => id}) do
    lost_id = LostId.get_lost_id!(id)
    render(conn, "show.json", lost_id: lost_id)
  end

  def create(conn, %{"params" => lost_id_params}) do
    with {:ok, %Id{}} <- LostId.create_lost_id(lost_id_params) do
      lost_ids = LostId.list_lost_ids()
      render(conn, "index.json", lost_ids: lost_ids)
    end
  end

  def update(conn, %{"id" => id, "params" => lost_id_params}) do
    lost_id = LostId.get_lost_id!(id)

    with {:ok, %Id{}} <- LostId.update_lost_id(lost_id, lost_id_params) do
      lost_ids = LostId.list_lost_ids()
      render(conn, "index.json", lost_ids: lost_ids)
    end
  end

  def delete(conn, %{"id" => id}) do
    lost_id = LostId.get_lost_id!(id)

    with {:ok, %Id{}} <- LostId.delete_lost_id(lost_id) do
      lost_ids = LostId.list_lost_ids()
      render(conn, "index.json", lost_ids: lost_ids)
    end
  end
end
