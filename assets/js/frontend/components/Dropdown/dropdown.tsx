import React, { useState, useRef, useEffect, ReactNode } from "react";

import { isEmpty } from "lodash";

import { Color } from "../colorCodes";
import * as styled from "./styles/dropdown";
import OnClickOutside from "../OnClickOutside";

export type DropdownProps = {
  maxHeight?: number;
  width?: number;
  backgroundColor?: string;
  backgroundColorOnHover?: string;
  fontColor?: string;
  fontSize?: number;
  fontColorOnHover?: string;
  children?: ReactNode;
  options: any[] | React.JSX.Element;
  displayDropdown?: boolean;
  isSearch?: boolean;
  isOptionsList?: boolean;
  borderTop?: boolean;
  fn?: (value: string) => void;
};

export const Dropdown = (props: DropdownProps) => {
  const {
    maxHeight,
    width,
    backgroundColor = Color.white,
    backgroundColorOnHover = Color.lightBlue,
    fontColor = Color.darkBlueFont,
    fontColorOnHover = Color.white,
    fontSize,
    children,
    options,
    displayDropdown = false,
    isSearch = false,
    isOptionsList = true,
    borderTop = true,
    fn,
  } = props;

  const [display, setDisplay] = useState(false);
  const [distanceToTop, setDistToTop] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [distanceToLeft, setDistToLeft] = useState(0);
  const childrenRef = useRef(null);

  const dropdownSettings = {
    maxHeight,
    width,
    backgroundColor,
    backgroundColorOnHover,
    fontColor,
    fontColorOnHover,
    fontSize,
    displayDropdown: isSearch ? displayDropdown : display,
    isSearch,
    isOptionsList,
    borderTop,
  };

  useEffect(() => {
    const measureDistance = () => {
      if (childrenRef.current) {
        const select = childrenRef.current.getBoundingClientRect();

        setDropdownWidth(select.width);
        setDistToLeft(select.left);
        setDistToTop(select.bottom);
      }
    };

    window.addEventListener("scroll", measureDistance);
    window.addEventListener("resize", measureDistance);

    measureDistance();

    return () => {
      window.removeEventListener("scroll", measureDistance);
      window.removeEventListener("resize", measureDistance);
    };
  }, []);

  const distanceToLeftWidth =
    dropdownWidth > 0 && distanceToLeft - (width - dropdownWidth) / 2;

  const dropdownDistToLeft = width ? distanceToLeftWidth : distanceToLeft;

  return (
    <OnClickOutside
      onClickOutsideFn={() => setDisplay(false)}
      isSearch={isSearch}
    >
      <styled.DropdownContainer onClick={() => setDisplay(!display)}>
        <styled.Children borderTop={borderTop} ref={childrenRef}>
          {children}
        </styled.Children>
        <styled.DropdownWrapper
          distanceToTop={distanceToTop}
          dropdownWidth={dropdownWidth}
          dropdownDistToLeft={dropdownDistToLeft}
          dropdownSettings={dropdownSettings}
        >
          <styled.OptionsWrapper>
            {isOptionsList
              ? !isEmpty(options) &&
                (options as any[]).map((option) => (
                  <styled.OptionContainer
                    dropdownSettings={dropdownSettings}
                    onClick={() => fn(option)}
                  >
                    <styled.Option dropdownSettings={dropdownSettings}>
                      {option}
                    </styled.Option>
                  </styled.OptionContainer>
                ))
              : options}
          </styled.OptionsWrapper>
        </styled.DropdownWrapper>
      </styled.DropdownContainer>
    </OnClickOutside>
  );
};
