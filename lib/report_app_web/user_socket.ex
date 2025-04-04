defmodule ReportAppWeb.UserSocket do
  use Phoenix.Socket

  alias ReportApp.Guardian.Guardian

  ## Channels
  channel "mail:lobby", ReportAppWeb.MailChannel
  channel "chats:*", ReportAppWeb.MessageChannel

  # Socket params are passed from the client and can
  # be used to verify and authenticate a user. After
  # verification, you can put default assigns into
  # the socket that will be set for all channels, ie
  # `assign(socket, :user_id, verified_user_id)`.
  #
  # To deny connection, return `:error`.
  #
  # See `Phoenix.Token` documentation for examples in
  # performing token verification on connect.
  def connect(%{"token" => token}, socket, _connect_info) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        {:ok, user} = Guardian.resource_from_claims(claims)
        {:ok, assign(socket, :user_id, user.id)}

      {:error, reason} ->
        {:error, reason}
    end
  end

  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end

  # Socket id's are topics that allow you to identify all sockets for a given user:
  def id(%{assigns: %{user_id: user_id}}), do: "user_socket:#{user_id}"

  def id(_), do: nil
  #
  # Returning `nil` makes this socket anonymous.
end
