defmodule ReportAppWeb.Api.GeminiController do
  use ReportAppWeb, :controller

  alias ReportApp.Gemini

  def send_gemini_request(conn, %{"prompt" => text}) do
    with {:ok, content} <- Gemini.ask_gemini(text) do
      render(conn, "index.json", %{content: content})
    end
  end
end
