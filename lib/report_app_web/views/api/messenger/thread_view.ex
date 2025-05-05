defmodule ReportAppWeb.Api.ThreadView do
      alias ReportAppWeb.Api.UserView
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.{ThreadView, MessageView}

  def render("index.json", %{threads: threads, recipients: recipients}) do
    %{
      data: %{
        threads: render_many(threads, ThreadView, "thread.json"),
        recipients: render_many(recipients, UserView, "user.json")
      }
    }
  end

  def render("show.json", %{thread: thread}) do
    %{data: render_one(thread, ThreadView, "thread.json")}
  end

  def render("thread.json", %{thread: thread}) do
    %{
      id: thread.id,
      messages: render_many(thread.messages, MessageView, "message.json"),
      thread_users: render_many(thread.thread_users, ThreadView, "thread_user.json"),
    }
  end

  def render("thread_user.json", %{thread: thread_user}) do
    %{
      id: thread_user.user_id
    }
  end
end
