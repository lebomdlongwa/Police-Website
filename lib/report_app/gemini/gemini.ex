defmodule ReportApp.Gemini do
  @api_key "AIzaSyCDra_fbaR2ElhpvIAGifGczY3HwfCNzWk"
  @gemini_url "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-001:generateContent?key=#{@api_key}"
  @options [
    timeout: 60_000,
    recv_timeout: 60_000
  ]

  def ask_gemini(text) do
    body =
      %{
        "contents" => [
          %{"parts" => [%{"text" => text}]}
        ]
      }
      |> Jason.encode!()

    headers = [
      {"Content-Type", "application/json"}
    ]

    case HTTPoison.post(@gemini_url, body, headers, @options) do
      {:ok, %{body: body}} ->
        {:ok, Jason.decode!(body)}

      {:error, error} ->
        {:error, error}
    end
  end
end
