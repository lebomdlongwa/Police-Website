defmodule ReportAppWeb.Api.GeminiView do
  use ReportAppWeb, :view

  def render("index.json", %{content: content}) do
    %{
      content: content
    }
  end
end
