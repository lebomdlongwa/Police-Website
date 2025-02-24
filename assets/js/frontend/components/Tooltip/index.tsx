import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Color } from "../colorCodes";
import * as styled from "./styles";
// import { isEmpty } from "lodash";

export type TooltipProps = {
  maxHeight?: number;
  width?: number;
  backgroundColor?: string;
  backgroundColorOnHover?: string;
  fontColor?: string;
  fontSize?: number;
  fontColorOnHover?: string;
  children?: ReactNode;
  content?: ReactNode;
  position?: "NW" | "SE" | "S" | "N" | "E" | "W";
};

export const Tooltip = (props: TooltipProps) => {
  const {
    maxHeight,
    width,
    backgroundColor = Color.white,
    backgroundColorOnHover = Color.lightBlue,
    fontColor = Color.darkBlueFont,
    fontColorOnHover = Color.white,
    fontSize,
    children,
    content,
    position,
  } = props;

  const [distanceToTop, setDistToTop] = useState(0);
  const [distanceToBottom, setDistToBottom] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [distanceToLeft, setDistToLeft] = useState(0);
  const [distanceToRight, setDistToRight] = useState(0);
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const [leftHalfDist, setLeftHalfDist] = useState(0);
  const [cods, setCods] = useState({
    top: null,
    left: null,
  });
  const childrenRef = useRef(null);
  const tooltipRef = useRef(null);

  const tooltipSettings = {
    maxHeight,
    width,
    backgroundColor,
    backgroundColorOnHover,
    fontColor,
    fontColorOnHover,
    fontSize,
    position,
  };

  // const handleMouseEnter = (event) => {
  //   const { clientX, clientY } = event.nativeEvent;
  //   const coords = calculateCoordinates(position, childrenRef.current);

  //   setCods(coords);
  // };

  // const calculateCoordinates = (
  //   position: string,
  //   target: React.MutableRefObject<HTMLDivElement>
  // ) => {
  //   if (target.current) {
  //     const select = target.current.getBoundingClientRect();

  //     const top = ["NW", "NE", "N", "E", "W"].includes(position)
  //       ? select.top
  //       : select.bottom +
  //         (["E", "W"].includes(position) ? select.height / 2 : 0) +
  //         document.defaultView.pageYOffset;
  //     const left =
  //       (["E"].includes(position) ? select.right : select.left) +
  //       (["E", "W"].includes(position) ? 0 : select.width / 2) +
  //       document.defaultView.pageXOffset;

  //     return { top: top, left: left };
  //   }
  // };

  const handleDisplayTooltip = () => setDisplayTooltip(!displayTooltip);

  useEffect(() => {
    const measureDistance = () => {
      if (childrenRef.current) {
        const select = childrenRef.current.getBoundingClientRect();

        setTooltipWidth(select.width);
        setDistToRight(select.right);
        setDistToLeft(select.left);
        setDistToTop(select.top);
        setDistToBottom(select.bottom);
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

  const distanceToLeftWidth = distanceToLeft - (width - tooltipWidth) / 2;
  const tooltipDistToLeft = width ? distanceToLeftWidth : distanceToLeft;

  return (
    <styled.TooltipContainer>
      <styled.Children
        ref={childrenRef}
        onMouseEnter={() => {
          handleDisplayTooltip();
          // calculateCoordinates(position, childrenRef);
        }}
        onMouseLeave={handleDisplayTooltip}
      >
        {children}
      </styled.Children>
      <styled.TooltipWrapper
        displayTooltip={displayTooltip}
        tooltipWidth={width}
        tooltipDistToLeft={tooltipDistToLeft}
        tooltipSettings={tooltipSettings}
        ref={tooltipRef}
        left={position === "E" ? distanceToRight + 5 : distanceToLeft}
        top={position === "S" ? distanceToBottom + 5 : distanceToTop}
      >
        {content}
      </styled.TooltipWrapper>
    </styled.TooltipContainer>
  );
};
