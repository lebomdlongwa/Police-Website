defmodule ReportAppWeb.Api.MailView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.MailView

  def render("index.json", %{mails: mails}) do
    %{data: render_many(mails, MailView, "mail.json")}
  end

  def render("show.json", %{mail: mail}) do
    %{data: render_one(mail, MailView, "mail.json")}
  end

  def render("mail.json", %{mail: mail}) do
    crime_or_person_mail(mail)
  end

  def render("delete.json", %{}) do
    %{
      success: true,
      message: "ID deleted successfully"
    }
  end

  defp crime_or_person_mail(mail) do
    if mail.type == "crime" do
      %{
        id: mail.id,
        type: mail.type,
        name: mail.name,
        surname: mail.surname,
        accused: mail.accused,
        brief_circumstance: mail.brief_circumstance,
        location: mail.location,
        rejected: mail.rejected,
        timestamp: date_time(mail.inserted_at)
      }
    else
      %{
        id: mail.id,
        type: mail.type,
        name: mail.name,
        surname: mail.surname,
        date_last_seen: mail.date_last_seen,
        location_last_seen: mail.location_last_seen,
        known_as: mail.known_as,
        clothes_worn: mail.clothes_worn,
        brief_summary: mail.brief_summary,
        missing_person_id: mail.missing_person_id,
        rejected: mail.rejected,
        timestamp: date_time(mail.inserted_at)
      }
    end
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
