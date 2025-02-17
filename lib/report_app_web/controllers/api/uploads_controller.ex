defmodule ReportAppWeb.Api.UploadController do
  use ReportAppWeb, :controller

  alias ReportApp.{Upload, Uploads}

  def index(conn, _params) do
    uploads = Uploads.list_uploads()
    render(conn, "index.json", uploads: uploads)
  end

  def show(conn, %{"id" => id}) do
    upload = Uploads.get_upload!(id)
    render(conn, "show.json", upload: upload)
  end

  def create(conn, %{"file" => file}) do
    with {:ok, %Upload{} = upload} <- Uploads.create_upload(file) do
      render(conn, "show.json", upload: upload)
    end
  end
end
