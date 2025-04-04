defmodule ReportAppWeb.Api.MissingView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.MissingView

  def render("index.json", %{missing_persons: missing_persons}) do
    %{data: render_many(missing_persons, MissingView, "missing_person.json")}
  end

  def render("show.json", %{missing_person: missing_person}) do
    %{data: render_one(missing_person, MissingView, "missing_person.json")}
  end

  def render("missing_person.json", %{missing: missing}) do
    %{
      id: missing.id,
      fullname: missing.fullname,
      age: missing.age,
      last_seen: missing.last_seen,
      last_place_seen: missing.last_place_seen,
      clothes: missing.clothes,
      height: missing.height,
      weight: missing.weight,
      body_stature: missing.body_stature,
      skin_colour: missing.skin_colour
      # report_date: Date.to_string(missing_person.inserted_at)
    }
  end
end
