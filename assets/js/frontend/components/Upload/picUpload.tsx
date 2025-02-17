import React, { useRef } from "react";
import * as styled from "./styles/picture";
import { uploadFile } from "../../containers/People/MissingPeople/actions";
import { Button } from "../Button/button";

type PictureUploadProps = {};

export const PictureUpload = (props: PictureUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file);
      uploadFile(file);
    }
  };

  return (
    <styled.Wrapper>
      <styled.InputPhoto>Select file to upload...</styled.InputPhoto>
      <styled.FileUploader>
        <Button text="Select" onClick={handleUploadClick} size="small" />
        <styled.UploadInput ref={fileInputRef} onChange={handleFileChange} />
      </styled.FileUploader>
    </styled.Wrapper>
  );
};
