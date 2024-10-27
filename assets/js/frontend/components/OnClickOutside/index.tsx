import React, { ReactNode, useEffect, useRef } from "react";

type OnClickOutsideProps = {
  children: ReactNode;
  onClickOutsideFn: VoidCallBack;
};

interface WrapperElement extends HTMLDivElement {
  contains: (target: EventTarget | undefined | null) => boolean;
}

const OnClickOutside = (props: OnClickOutsideProps) => {
  const { children, onClickOutsideFn } = props;

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

  return <div ref={wrapperRef}>{children}</div>;
};

export default OnClickOutside;
