defmodule ReportAppWeb.Api.UploadView do
  use ReportAppWeb, :view

  alias ReportAppWeb.Api.UploadView

  def render("index.json", %{uploads: uploads}) do
    %{data: render_many(uploads, UploadView, "upload.json")}
  end

  def render("show.json", %{upload: upload}) do
    %{data: render_one(upload, UploadView, "upload.json")}
  end

  def render("upload.json", %{upload: upload}) do
    %{
      id: upload.id,
      name: upload.name,
      type: upload.type,
      file_path: upload.file_path,
      inserted_at: upload.inserted_at,
      updated_at: upload.updated_at
    }
  end
end
