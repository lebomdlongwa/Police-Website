import { baseUrl } from "./containers/requests";

export const askGemini = (prompt: string) => {
  fetch(`${baseUrl}/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: prompt }),
  })
    .then((response) =>
      response
        .json()
        .then((data) =>
          console.log(data?.content?.candidates[0]?.content?.parts[0]?.text)
        )
        .catch((err) => err)
    )
    .catch((err) => err);
};
