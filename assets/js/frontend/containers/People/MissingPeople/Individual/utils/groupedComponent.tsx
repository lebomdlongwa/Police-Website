import React, { ChangeEvent } from "react";
import * as styled from "../styles/individual";
import { useUser } from "../../../../userContext";

type FormDefinition = {
  label: string;
  placeholder: string;
  name: string;
};

type DetailRowsProps = {
  formInput: MissingPersonParams;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  item: FormDefinition;
};

export const DetailRowComponent = (props: DetailRowsProps) => {
  const { formInput, onChange, item } = props;
  const { admin } = useUser();
  const value = formInput[`${item.name}` as keyof typeof formInput];

  return (
    <styled.DetailRows>
      <styled.SubjectContentWrapper>
        <styled.DetailSubject>{item.label}</styled.DetailSubject>
        <styled.DetailContent
          placeholder={item.placeholder}
          value={value}
          name={item.name}
          onChange={admin && onChange}
        />
      </styled.SubjectContentWrapper>
    </styled.DetailRows>
  );
};

export const DoubleDetailRowComponent = (props: DetailRowsProps) => {
  const { formInput, onChange, item } = props;
  const { admin } = useUser();
  const value = formInput[`${item.name}` as keyof typeof formInput];

  return (
    <styled.DoubleDetailRow>
      <styled.DetailRows>
        <styled.SubjectContentWrapper>
          <styled.DetailSubject>{item.label}</styled.DetailSubject>
          <styled.DetailContent
            placeholder={item.placeholder}
            value={value}
            name={item.name}
            onChange={admin && onChange}
          />
        </styled.SubjectContentWrapper>
      </styled.DetailRows>
    </styled.DoubleDetailRow>
  );
};
