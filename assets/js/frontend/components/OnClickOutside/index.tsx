import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

type OnClickOutsideProps = {
  children: ReactNode;
  onClickOutsideFn: VoidCallBack;
  isSearch?: boolean;
};

const Wrapper = styled.div.attrs<{ isSearch?: boolean }>({
  className: "Wrapper",
})`
  ${({ isSearch }) => !isSearch && "width: 100%"}
`;

interface WrapperElement extends HTMLDivElement {
  contains: (target: EventTarget | undefined | null) => boolean;
}

const OnClickOutside = (props: OnClickOutsideProps) => {
  const { children, onClickOutsideFn, isSearch } = props;

  const wrapperRef = useRef<WrapperElement>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClickOutsideFn();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutsideFn]);

  return (
    <Wrapper isSearch={isSearch} ref={wrapperRef}>
      {children}
    </Wrapper>
  );
};

export default OnClickOutside;
