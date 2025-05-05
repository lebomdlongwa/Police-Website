defmodule ReportAppWeb.Api.ThreadController do
  use ReportAppWeb, :controller

  alias ReportApp.Messenger.Threads

  def get_user_threads(conn, _params) do
    with user_id when not is_nil(user_id) <- get_session(conn, :user_id),
         threads when is_list(threads) <- Threads.get_user_threads(user_id),
         recipients when is_list(recipients) <- Threads.get_user_recipients(user_id) do
      render(conn, "index.json", %{threads: threads, recipients: recipients})
    end
  end

  # def setSeenTrue(conn, %{"thread_id" => thread_id}) do

  # end

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
