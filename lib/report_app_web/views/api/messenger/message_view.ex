defmodule ReportAppWeb.Api.MessageView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.MessageView

  def render("index.json", %{messages: messages}) do
    %{data: render_many(messages, MessageView, "message.json")}
  end

  def render("show.json", %{message: message}) do
    %{data: render_one(message, MessageView, "message.json")}
  end

  def render("message.json", %{message: message}) do
    %{
      id: message.id,
      content: message.content,
      recipient_id: message.recipient_id,
      author_id: message.author_id,
      thread_id: message.thread_id,
      seen: message.seen,
      inserted_at: date_time(message.inserted_at),
      updated_at: message.updated_at
    }
  end

  def render("delete.json", _) do
    %{
      success: true,
      message: "Message deleted successfully"
    }
  end

  defp date_time(date) do
    current_date = Date.utc_today()

    case current_date == NaiveDateTime.to_date(date) do
      true ->
        date
        |> NaiveDateTime.to_time()
        |> Time.to_string()
        |> String.slice(0, 5)

      false ->
        date
        |> Calendar.strftime("%-d %b")
    end
  end
end
