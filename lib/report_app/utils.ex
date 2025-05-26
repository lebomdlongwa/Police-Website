defmodule ReportApp.Utils do
  def atomize_keys(map) when is_map(map) do
    map
    |> Map.new(fn {key, val} ->
      atom_key = if is_binary(key), do: String.to_atom(key), else: key
      {atom_key, atomize_keys(val)}
    end)
  end

  def atomize_keys(list) when is_list(list), do: Enum.map(list, &atomize_keys/1)
  def atomize_keys(other), do: other
end
