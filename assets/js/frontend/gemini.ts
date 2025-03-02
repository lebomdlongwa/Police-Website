import { baseUrl } from "./containers/requests";

export const askGemini = async (prompt: string) => {
  const response = await fetch(`${baseUrl}/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: prompt }),
  });

  const data = await response.json();
  console.log(data?.content?.candidates[0]?.content?.parts[0]?.text);
};
