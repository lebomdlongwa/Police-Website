import React, { useEffect, useState } from "react";

import { useUser } from "../userContext";

import * as styled from "./styles/index";
import { BannerReportModal } from "./modal";

type EventProps = "report" | "missing" | "wanted";

const Banner = ({ admin }: { admin: boolean }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    location_name: null,
    boundingbox: null,
    place_id: null,
  });
  const { user } = useUser();

  const handleShowModal = () => setShowReportModal(!showReportModal);
  const onSetImgUrl = (url: string) => setImgUrl(url);
  const onSetLocation = (location: GeoLocation) => setLocation(location);

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

  useEffect(() => {
    const locationValid = Object.values(location).every(
      (value) => value !== null
    );

    if (locationValid && imgUrl) {
      setSubmitForm(true);
    }
  }, [location, imgUrl]);

  return (
    <styled.Wrapper>
      <styled.BannerImage>
        {admin && (
          <styled.LinksWrapper>
            <styled.Links onClick={handleShowModal}>Report Crime</styled.Links>
            {showReportModal && (
              <BannerReportModal
                handleShowModal={handleShowModal}
                user={user}
                onSetImgUrl={onSetImgUrl}
                onSetLocation={onSetLocation}
                imgUrl={imgUrl}
                location={location}
                submitForm={submitForm}
              />
            )}
            <styled.Links onClick={() => handleScrollEvent("missing")}>
              View Missing People
            </styled.Links>
            <styled.Links onClick={() => handleScrollEvent("wanted")}>
              View Wanted People
            </styled.Links>
          </styled.LinksWrapper>
        )}
      </styled.BannerImage>
    </styled.Wrapper>
  );
};

export default Banner;
