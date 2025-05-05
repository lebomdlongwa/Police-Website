defmodule ReportApp.Messenger.Messages do
  import Ecto.Query

  alias ReportApp.Repo
  alias ReportApp.Messenger.Threads
  alias ReportApp.Messenger.Schemas.Message

  def create_message(params) do
    %Message{}
    |> Message.changeset(params)
    |> Repo.insert()
  end

  def insert_message_into_thread(params) do
    with {:ok, message} <- create_message(params) do
      Threads.put_message_in_thread(message)
    end
  end

  def update_message(%Message{} = message, params) do
    message
    |> Message.changeset(params)
    |> Repo.update()
  end

  def delete_message(message) do
    Repo.delete(message)
  end

  def unseen_messages_count(thread_id, user_id) do
    Repo.one(
      from m in Message,
      where: m.thread_id == ^thread_id,
      where: m.author_id != ^user_id,
      where: m.seen == true,
      select: count(m.id)
    )
  end

  def set_seen_true(thread_id) do
    from(m in Message,
      where: m.thread_id == ^thread_id,
      where: m.seen != true,
      update: [set: [seen: true]]
    )
    |> Repo.update_all([])
  end
end
