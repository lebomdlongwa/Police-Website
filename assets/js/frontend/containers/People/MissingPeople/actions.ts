import { httpGet } from "../../requests";

const path = "http://localhost:4000/api/uploads";

export const getUploadedFiles = async (): Promise<Upload[]> =>
  await httpGet("/uploads");

export const getLastUpload = async (): Promise<Upload> =>
  await httpGet("/uploads/last");

export const uploadFile = async (file: File): Promise<Upload> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(path, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("File upload failed");
  }

  return response.json();
};
