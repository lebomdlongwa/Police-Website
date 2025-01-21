defmodule ReportAppWeb.Api.MissingController do
  use ReportAppWeb, :controller

  alias ReportApp.MissingPerson.MissingPerson
  alias ReportApp.Missing

  def index(conn, _params) do
    missing_persons = Missing.list_missing_persons()
    render(conn, "index.json", missing_persons: missing_persons)
  end

  def show(conn, %{"id" => id}) when is_binary(id) do
    missing_person = Missing.get_missing_person!(id)
    render(conn, "show.json", missing_person: missing_person)
  end

  def create(conn, %{"params" => params}) do
    with {:ok, %MissingPerson{} = missing_person} <- Missing.create_missing_person(params) do
      render(conn, "show.json", missing_person: missing_person)
    end
  end

  def update(conn, %{"id" => id, "params" => params}) do
    missing_person = Missing.get_missing_person!(id)

    with {:ok, %MissingPerson{} = missing_person} <-
           Missing.update_missing_person(missing_person, params) do
      render(conn, "show.json", missing_person: missing_person)
    end
  end

  def delete(conn, %{"id" => id}) do
    missing_person = Missing.get_missing_person!(id)

    with {:ok, %MissingPerson{} = missing_person} <- Missing.delete_missing_person(missing_person) do
      render(conn, "delete.json", "")
    end
  end
end
