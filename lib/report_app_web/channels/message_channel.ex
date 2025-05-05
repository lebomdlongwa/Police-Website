defmodule ReportAppWeb.MessageChannel do
  use Phoenix.Channel

  alias ReportAppWeb.Api.MessageView
  alias ReportApp.Messenger.Messages

  require Logger

  def join("chats:" <> thread_id, _params, socket) do
    Logger.info("User joined chat thread #{thread_id}")
    {:ok, socket}
  end

  def handle_in("send_message", %{"message" => message}, socket) do
    case Messages.insert_message_into_thread(message) do
      {:ok, message} ->
        broadcast!(socket, "new_message", %{
          message: MessageView.render("show.json", %{message: message})
        })

        Logger.info("Broadcasting new message: #{inspect(message)}")
        {:noreply, socket}

      {:error, error} ->
        {:reply, {:error, %{reason: "Unable to send message: #{error}"}}, socket}
    end
  end
end
