import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD8XeKXwElIvhXRVjr8pbvYLF5Kfd4GpgI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (
  handleSetIsLoading: (value: boolean) => void,
  briefSummary: string
) => {
  handleSetIsLoading(true);
  const prompt = `Can you please summarize the following text in a concise manner, and list details in bullet points? \n\n${briefSummary}`;

  const result = await model.generateContent(prompt);
  return result.response.text;
};
