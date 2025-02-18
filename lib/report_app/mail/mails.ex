defmodule ReportApp.Mails do
  alias ReportAppWeb.MailChannel
  alias ReportApp.{Repo, Reports, Mail, MissingReports}

  import Ecto.Query

  def list_mails() do
    Repo.all(
      from m in Mail,
        order_by: [desc: m.inserted_at]
    )
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

  def create_report(%{"id" => id, "officer" => officer, "grade" => grade}) do
    %{type: type} = report_params = fetch_mail_details(id)

    report_creation =
      if type == "person" do
        MissingReports.create_missing_report(report_params)
      else
        params = Map.merge(report_params, %{officer: officer, grade: grade})
        Reports.create_report(params)
      end

    case report_creation do
      {:ok, _} ->
        id
        |> get_mail()
        |> delete_mail()

        MailChannel.push_out!()
        {:ok, "Report created and respective mail deleted"}

      {:error, changeset} ->
        {:error, changeset}

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
