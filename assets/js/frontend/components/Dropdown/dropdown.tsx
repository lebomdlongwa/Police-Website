import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Color } from "../colorCodes";
import * as styled from "./styles/dropdown";

export type DropdownProps = {
  maxHeight?: number;
  width?: number;
  backgroundColor?: string;
  backgroundColorOnHover?: string;
  fontColor?: string;
  fontSize?: number;
  fontColorOnHover?: string;
  children?: ReactNode;
  options?: any[];
  displayDropdown: boolean;
  isSearch?: boolean;
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
  } = props;

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
    displayDropdown,
    isSearch,
  };

  useEffect(() => {
    const measureDistance = () => {
      if (childrenRef.current) {
        const select = childrenRef.current.getBoundingClientRect();
        const parentElement = childrenRef.current;
        const firstChild = parentElement.children[0];

        const style = window.getComputedStyle(firstChild);

        const marginRight = parseInt(style.marginRight || "0", 10) || 0;
        const marginLeft = parseInt(style.marginLeft || "0", 10) || 0;
        const marginTop = parseInt(style.marginTop || "0", 10) || 0;
        const marginBottom = parseInt(style.marginBottom || "0", 10) || 0;

        setDropdownWidth(select.width - marginRight - marginLeft);
        setDistToLeft(select.left - marginLeft);
        setDistToTop(select.bottom - marginTop - marginBottom);
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
    <styled.DropdownContainer>
      <styled.Children ref={childrenRef}>{children}</styled.Children>
      <styled.DropdownWrapper
        distanceToTop={distanceToTop}
        dropdownWidth={dropdownWidth}
        dropdownDistToLeft={dropdownDistToLeft}
        dropdownSettings={dropdownSettings}
      >
        <styled.OptionsWrapper>
          {options &&
            options.map((option) => (
              <styled.OptionContainer dropdownSettings={dropdownSettings}>
                <styled.Option dropdownSettings={dropdownSettings}>
                  {option}
                </styled.Option>
              </styled.OptionContainer>
            ))}
        </styled.OptionsWrapper>
      </styled.DropdownWrapper>
    </styled.DropdownContainer>
  );
};
