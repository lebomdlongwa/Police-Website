defmodule ReportAppWeb.Api.LostIdView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.LostIdView

  def render("index.json", %{lost_ids: lost_ids}) do
    %{data: render_many(lost_ids, LostIdView, "lost_id.json")}
  end

  def render("show.json", %{lost_id: lost_id}) do
    IO.inspect(lost_id)

    %{
      id: lost_id.id,
      fullname: lost_id.fullname,
      idNumber: lost_id.idNumber
    }

    # %{data: render_one(lost_id, LostIdView, "lost_id.json")}
  end

  def render("lost_id.json", %{lost_id: lost_id}) do
    %{
      id: lost_id.id,
      fullname: lost_id.fullname,
      idNumber: lost_id.idNumber,
      dateLost: lost_id.dateLost
    }
  end

  def render("delete.json", _) do
    %{
      success: true,
      message: "ID deleted successfully"
    }
  end
end
