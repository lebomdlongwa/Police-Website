defmodule ReportApp.Uploads do
  alias ReportApp.Upload
  alias ReportApp.Repo

  import Ecto.Query

  @uploads "priv/static/uploaded_images"

  def list_uploads() do
    Repo.all(Upload)
  end

  def get_upload!(id) do
    case id do
      "last" ->
        get_last_upload()

      _ ->
        Repo.get!(Upload, id)
    end
  end

  def get_last_upload() do
    Repo.one!(
      from u in Upload,
        order_by: [desc: u.inserted_at],
        limit: 1
    )
  end

  def create_upload(file) do
    %Upload{}
    |> Upload.changeset(save_file(file))
    |> Repo.insert()
  end

  def save_file(%Plug.Upload{filename: filename, path: temp_path, content_type: type}) do
    file_path = Path.join(@uploads, filename)

    case File.cp(temp_path, file_path) do
      :ok ->
        %{name: filename, file_path: file_path, type: type}

      {:error, reason} ->
        {:error, reason}
    end
  end
end
