import React from "react";
import * as styled from "./styles/picture";

export const PictureUpload = () => {
  return (
    <styled.Wrapper>
      <styled.InputPhoto>Select file to upload</styled.InputPhoto>
      <styled.FileUploader>
        <styled.Upload>Upload</styled.Upload>
      </styled.FileUploader>
    </styled.Wrapper>
  );
};
