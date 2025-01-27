import React, { useState } from "react";
import * as styled from "./styles/index";
import { BannerReportModal } from "./modal";

type EventProps = "report" | "missing" | "wanted";

const Banner = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  const handleShowModal = () => setShowReportModal(!showReportModal);

  const handleScrollEvent = (event: EventProps) => {
    if (event === "report") {
      const scrollEvent = new Event("reportScrollEvent");
      document.dispatchEvent(scrollEvent);
    } else if (event === "missing") {
      const scrollEvent = new Event("missingScrollEvent");
      document.dispatchEvent(scrollEvent);
    } else {
      const scrollEvent = new Event("wantedScrollEvent");
      document.dispatchEvent(scrollEvent);
    }
  };

  return (
    <styled.Wrapper>
      <styled.BannerImage>
        <styled.LinksWrapper>
          <styled.Links onClick={handleShowModal}>Report Crime</styled.Links>
          {showReportModal && (
            <BannerReportModal handleShowModal={handleShowModal} />
          )}
          <styled.Links onClick={() => handleScrollEvent("missing")}>
            View Missing People
          </styled.Links>
          <styled.Links onClick={() => handleScrollEvent("wanted")}>
            View Wanted People
          </styled.Links>
        </styled.LinksWrapper>
      </styled.BannerImage>
    </styled.Wrapper>
  );
};

export default Banner;
