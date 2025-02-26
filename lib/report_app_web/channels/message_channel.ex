defmodule ReportAppWeb.MessageChannel do
  use Phoenix.Channel

  alias ReportAppWeb.Api.MessageView
  alias ReportApp.Messages.Message
  alias ReportApp.Repo

  require Logger

  def join("chats:" <> user_id, _params, socket) do
    resp = %{messages: MessageView.render("index.json", %{messages: Repo.all(Message)})}

    {:ok, resp, socket}
  end

  def handle_in("send_message", %{"message" => message}, socket) do
    case Message.changeset(%Message{}, %{content: message})
         |> Repo.insert() do
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
