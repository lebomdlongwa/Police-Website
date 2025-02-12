defmodule ReportAppWeb.MailChannel do
  use Phoenix.Channel

  alias ReportApp.Mails
  alias ReportAppWeb.Endpoint
  alias ReportAppWeb.Api.MailView

  def join("mail:lobby", _payload, socket) do
    {:ok, socket}
  end

  def handle_in("get_mails", _payload, socket) do
    mails = Mails.list_mails()
    broadcast!(socket, "new_mail_list", %{mails: mails})
    {:noreply, socket}
  end

  def push_out!() do
    payload = %{
      mails: MailView.render("index.json", %{mails: Mails.list_mails()})
    }

    Endpoint.broadcast_from(
      self(),
      "mail:lobby",
      "get_mails",
      payload
    )
  end
end
