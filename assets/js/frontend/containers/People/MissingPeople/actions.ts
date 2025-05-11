import { httpGet } from "../../requests";

const path = "http://localhost:4000/api/uploads";

export const getUploadedFiles = (): Promise<Upload[]> => httpGet("/uploads");

export const getLastUpload = (): Promise<Upload> => httpGet("/uploads/last");

export const uploadFile = (file: File): Promise<Upload> => {
  const formData = new FormData();
  formData.append("file", file);

  fetch(path, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("File upload failed");
    });
};
