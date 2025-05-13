import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

type OnClickOutsideProps = {
  children: ReactNode;
  onClickOutsideFn: VoidCallBack;
  isSearch?: boolean;
  clearSearchValue: VoidCallBack;
};

const OnClickOutsideWrapper = styled.div.attrs<{ isSearch?: boolean }>({
  className: "OnClickOutsideWrapper",
})`
  ${({ isSearch }) => !isSearch && "width: 100%"}
`;

interface WrapperElement extends HTMLDivElement {
  contains: (target: EventTarget | undefined | null) => boolean;
}

const OnClickOutside = (props: OnClickOutsideProps) => {
  const {
    children,
    onClickOutsideFn,
    isSearch = false,
    clearSearchValue,
  } = props;

  const wrapperRef = useRef<WrapperElement>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClickOutsideFn();
        clearSearchValue();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutsideFn]);

  return (
    <OnClickOutsideWrapper isSearch={isSearch} ref={wrapperRef}>
      {children}
    </OnClickOutsideWrapper>
  );
};

export default OnClickOutside;
