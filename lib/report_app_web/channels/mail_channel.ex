defmodule ReportAppWeb.MailChannel do
  use Phoenix.Channel

  alias ReportApp.{Mail, Mails}
  alias ReportAppWeb.Api.MailView
  alias ReportAppWeb.Endpoint

  def join("mail:lobby", _payload, socket) do
    {:ok, socket}
  end

  def handle_in("get_mails", _payload, socket) do
    mails = Mails.list_mails()
    broadcast!(socket, "new_mail_list", %{mails: mails})
    {:noreply, socket}
  end

  def handle_in("send_mails", %{"mail" => mail}, socket) do
    case Mails.create_mail(mail) do
      {:ok, %Mail{} = mail} ->
        broadcast!(socket, "new_mail_item", %{
          mail: MailView.render("show.json", %{mail: mail})
        })

        {:noreply, socket}

      {:error, error} ->
        {:reply, error, socket}
    end
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
