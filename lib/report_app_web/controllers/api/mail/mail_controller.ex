defmodule ReportAppWeb.Api.MailController do
  use ReportAppWeb, :controller

  alias ReportApp.Mails
  alias ReportApp.Mail

  def index(conn, _params) do
    mails = Mails.list_mails()
    render(conn, "index.json", mails: mails)
  end

  def show(conn, %{"id" => id}) do
    mail = Mails.get_mail(id)
    render(conn, "show.json", mail: mail)
  end

  def create(conn, %{"params" => %{"id" => _} = params}) do
    case Mails.create_report(params) do
      {:ok, report} ->
        render(conn, "delete.json", %{})

      {:error, error} ->
        send_resp(conn, :unprocessable_entity, error)
    end
  end

  def create(conn, %{"params" => mail_params}) do
    with {:ok, %Mail{} = mail} <- Mails.create_mail(mail_params) do
      render(conn, "show.json", mail: mail)
    end
  end

  def update(conn, %{"id" => id, "params" => mail_params}) do
    mail = Mails.get_mail(id)

    with {:ok, %Mail{}} <- Mails.update_mail(mail, mail_params) do
      mails = Mails.list_mails()
      render(conn, "index.json", mails: mails)
    end
  end

  def delete(conn, %{"id" => id}) do
    mail = Mails.get_mail(id)

    with {:ok, %Mail{}} <- Mails.delete_mail(mail) do
      render(conn, "delete.json", %{})
    end
  end
end
