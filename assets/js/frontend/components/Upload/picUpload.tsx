import React from "react";
import * as styled from "./styles/picture";
import { routes } from "../../containers/PoliceApp";

export const PictureUpload = () => {
  return (
    <styled.Wrapper>
      <styled.InputPhoto>Select file to upload</styled.InputPhoto>
      <styled.FileUploader>
        <styled.StyledLink to={`${routes.missing}/:id`}>
          <styled.Upload>Upload</styled.Upload>
        </styled.StyledLink>
      </styled.FileUploader>
    </styled.Wrapper>
  );
};
