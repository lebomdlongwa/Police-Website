defmodule ReportApp.Messenger.Threads do
  import Ecto.Query

  alias ReportApp.Messenger.Schemas.{ThreadUser, Thread}
  alias ReportApp.Messenger.Messages
  alias ReportApp.{Repo, User}

  @preloads [:messages, :thread_users]

  def get_thread(id) do
    thread = Repo.get!(Thread, id)
    Repo.preload(thread, @preloads)
  end

  def get_user_thread_ids(user_id) do
    Repo.all(
      from t in Thread,
        join: tu in ThreadUser,
        on: tu.thread_id == t.id,
        where: tu.user_id == ^user_id,
        select: t.id
    )
  end

  def get_user_threads(user_id) do
    Repo.all(
      from t in Thread,
        where: t.id in ^get_user_thread_ids(user_id),
        preload: [:messages, :thread_users],
        select: t
    )
  end

  def get_user_recipients(user_id) do
    Repo.all(
      from u in User,
        join: tu in ThreadUser,
        on: tu.user_id == u.id,
        where: tu.thread_id in ^get_user_thread_ids(user_id),
        where: tu.user_id != ^user_id,
        select: u
    )
  end

  def put_message_in_thread(message) do
    author_id = Map.get(message, :author_id)
    recipient_id = Map.get(message, :recipient_id)
    thread_id = Map.get(message, :thread_id)

    case thread_id do
      nil ->
        with {:ok, %{thread_id: thread_id}} <-
               initialize_thread([author_id, recipient_id]) do
          Messages.update_message(message, %{thread_id: thread_id})
        end

      _ ->
        {:ok, message}
    end
  end

  def initialize_thread(%{"user_id" => user_id}) do
    admin_id =
      from(u in User,
        where: u.admin == true,
        select: u.id
      )
      |> Repo.one()

    users_ids = [admin_id, user_id]

    Ecto.Multi.new()
    |> Ecto.Multi.run(:thread, fn _, _ ->
      %Thread{}
      |> Thread.changeset()
      |> Repo.insert()
    end)
    |> Ecto.Multi.run(:thread_users, fn _, %{thread: thread} ->
      with [ok: thread_user_1, ok: thread_user_2] <- ThreadUser.create(thread, users_ids) do
        {:ok, [thread_user_1, thread_user_2]}
      end
    end)
    |> Repo.transaction()
    |> case do
      {:ok, %{thread: thread}} ->
        preloaded_thread = Repo.preload(thread, @preloads)
        {:ok, preloaded_thread}

      {:error, error} ->
        {:error, error}
    end
  end

  def list_participants(%Thread{} = thread) do
    thread
    |> Thread.users_query()
    |> Repo.all()
  end
end
