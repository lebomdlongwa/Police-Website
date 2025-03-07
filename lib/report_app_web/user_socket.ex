defmodule ReportAppWeb.UserSocket do
  use Phoenix.Socket

  ## Channels
  channel "mail:lobby", ReportAppWeb.MailChannel
  channel "chats:lobby", ReportAppWeb.MessageChannel

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
  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end

  # Socket id's are topics that allow you to identify all sockets for a given user:
  # def id(socket), do: "user_socket:#{socket.assigns.user_id}"
  #
  # Returning `nil` makes this socket anonymous.
  def id(_socket), do: nil
end
