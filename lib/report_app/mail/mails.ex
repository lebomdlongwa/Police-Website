defmodule ReportApp.Mails do
  alias ReportAppWeb.MailChannel
  alias ReportApp.Repo
  alias ReportApp.Mail
  alias ReportApp.MissingReports

  import Ecto.Query

  def list_mails() do
    Repo.all(Mail)
  end

  def get_mails_by(type) do
    Repo.all(
      from m in Mail,
        where: m.type == ^type,
        select: m
    )
  end

  def get_mail(id) do
    Repo.get!(Mail, id)
  end

  def create_mail(attrs) do
    %Mail{}
    |> Mail.changeset(attrs)
    |> Repo.insert()
  end

  def delete_mail(%Mail{} = mail) do
    Repo.delete(mail)
  end

  def create_report(id) do
    %{type: type} = report_params = fetch_mail_details(id)

    case type do
      "person" ->
        case MissingReports.create_missing_report(report_params) do
          {:ok, _} ->
            id
            |> get_mail()
            |> delete_mail()

            MailChannel.push_out!()
            {:ok, "Report created and mail deleted"}

          {:error, changeset} ->
            {:error, changeset}
        end

      # "crime" ->
      # Implement crime reports table in BE

      nil ->
        {:error, "Report type undefined"}
    end
  end

  defp fetch_mail_details(id) do
    id
    |> get_mail()
    |> Map.from_struct()
  end
end
