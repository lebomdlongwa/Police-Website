defmodule ReportAppWeb.Api.SessionView do
  use ReportAppWeb, :view

  def render("index.json", %{reason: reason}) do
    %{reason: reason}
  end
end
