import React, { useRef, useState } from "react";
import * as styled from "./styles/picture";
import { Button } from "../Button/button";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

type PictureUploadProps = {
  handleSetImgUrl: (url: string) => void;
  handleImgLoading: VoidCallBack;
};

export const PictureUpload = (props: PictureUploadProps) => {
  const { handleSetImgUrl, handleImgLoading } = props;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleImgLoading();

    const file = e.target.files?.[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleSetImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <styled.Wrapper>
      <styled.InputPhoto>Select file to upload...</styled.InputPhoto>
      <styled.FileUploader>
        <Button text="Select" onClick={handleUploadClick} size="small" />
        <styled.UploadInput ref={fileInputRef} onChange={handleSubmit} />
      </styled.FileUploader>
    </styled.Wrapper>
  );
};
