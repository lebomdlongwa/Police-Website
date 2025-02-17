defmodule ReportApp.Missing do
  alias ReportApp.Repo
  alias ReportApp.MissingPerson.MissingPerson

  import Ecto.Query

  def list_missing_persons() do
    sort_missing_persons_list()
  end

  def sort_missing_persons_list do
    Repo.all(
      from mp in MissingPerson,
        order_by: [desc: mp.inserted_at],
        select: mp
    )
  end

  def get_missing_person!(id) do
    Repo.get!(MissingPerson, id)
  end

  def create_missing_person(attrs) do
    %MissingPerson{}
    |> MissingPerson.changeset(attrs)
    |> Repo.insert()
  end

  def update_missing_person(%MissingPerson{} = missing_person, attrs) do
    missing_person
    |> MissingPerson.changeset(attrs)
    |> Repo.update()
  end

  def delete_missing_person(%MissingPerson{} = missing_person) do
    Repo.delete(missing_person)
  end
end
