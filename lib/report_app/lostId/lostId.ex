defmodule ReportApp.LostId do
  alias ReportApp.Repo
  alias ReportApp.LostId.Id

  import Ecto.Query

  def list_lost_ids() do
    sort_id_list()
  end

  def sort_id_list do
    data =
      Repo.all(
        from i in Id,
          order_by: [desc: i.inserted_at]
      )

    data
  end

  def get_lost_id!(id) do
    Repo.get!(Id, id)
  end

  def create_lost_id(attrs) do
    %Id{}
    |> Id.changeset(attrs)
    |> Repo.insert()
  end

  def update_lost_id(%Id{} = lost_id, attrs) do
    lost_id
    |> Id.changeset(attrs)
    |> Repo.update()
  end

  def delete_lost_id(%Id{} = lost_id) do
    Repo.delete(lost_id)
  end
end
