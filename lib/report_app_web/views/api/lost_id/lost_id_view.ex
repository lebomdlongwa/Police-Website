defmodule ReportAppWeb.Api.LostIdView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.LostIdView

  def render("index.json", %{lost_ids: lost_ids}) do
    %{data: render_many(lost_ids, LostIdView, "lost_id.json")}
  end

  def render("show.json", %{lost_id: lost_id}) do
    %{data: render_one(lost_id, LostIdView, "lost_id.json")}
  end

  def render("lost_id.json", %{lost_id: lost_id}) do
    %{
      id: lost_id.id,
      name: lost_id.name,
      surname: lost_id.surname,
      idNumber: lost_id.idNumber,
      dateLost: Date.to_string(lost_id.inserted_at)
    }
  end
end
