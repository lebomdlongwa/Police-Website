defmodule ReportAppWeb.UserChannel do
  use Phoenix.Channel

  import Ecto.Query

  alias ReportApp.{User, Utils, Repo}
  alias ReportAppWeb.Api.ThreadView
  alias ReportAppWeb.Endpoint


  require Logger

  def join("user:" <> user_id, _payload, socket) do
    {:ok, socket}
  end

  def handle_in("thread_initialized", %{"thread" => thread}, socket) do
    atomized_thread = Utils.atomize_keys(thread)

    admin_id =
      from(u in User,
        where: u.admin == true,
        select: u.id
      )
      |> Repo.one()

    Endpoint.broadcast("user:#{admin_id}", "new_thread", %{
      thread: ThreadView.render("show.json", %{thread: atomized_thread})
    })

    Logger.info("Broadcasting new thread: #{inspect(atomized_thread.id)}")
    {:noreply, socket}
  end

  def handle_in("message_status_changed", %{"thread_id" => thread_id, "recipient_id" => recipient_id}, socket) do
    Endpoint.broadcast("user:#{recipient_id}", "message_seen", %{
      thread_id: thread_id
    })

    Logger.info("Messages seen in thread_id: #{inspect(thread_id)}")
    {:noreply, socket}
  end
end
