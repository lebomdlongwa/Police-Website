defmodule ReportAppWeb.Api.ThreadController do
  use ReportAppWeb, :controller

  alias ReportApp.Messenger.{Threads, Messages}

  def get_user_threads(conn, _params) do
    with user_id when not is_nil(user_id) <- get_session(conn, :user_id),
         threads when is_list(threads) <- Threads.get_user_threads(user_id),
         recipients when is_list(recipients) <- Threads.get_user_recipients(user_id) do
      render(conn, "index.json", %{threads: threads, recipients: recipients})
    end
  end

  def set_seen_true(conn, %{"params" => thread_id}) do
    with {count, _} when is_integer(count) <- Messages.set_seen_true(thread_id) do
      json(conn, %{})
    end
  end

  def initialize_thread(conn, %{"params" => params}) do
    with {:ok, thread} <- Threads.initialize_thread(params) do
      render(conn, "show.json", thread: thread)
    end
  end

  # def show(conn, %{"id" => id}) do
  #   thread = Threads.get_thread!(id)
  #   render(conn, "show.json", thread: thread)
  # end

  # def delete(conn, %{"id" => id}) do
  #   thread = Threads.get_thread!(id)

  #   with {:ok, %Id{}} <- Threads.delete_thread(thread) do
  #     threads = Threads.list_threads()
  #     render(conn, "index.json", threads: threads)
  #   end
  # end
end
