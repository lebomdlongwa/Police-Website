export const geoLocation = (
  onSetImgUrl: (url: string) => void,
  onSetLocation: (location: object) => void
) => {
  if ("geolocation" in navigator) {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const token = "pk.75accdbf7d477f652db436402611661f";
        const reverseUrl = `https://us1.locationiq.com/v1/reverse.php?key=${token}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
        const imgUrl = `https://maps.locationiq.com/v3/staticmap?key=${token}&center=${position.coords.latitude},${position.coords.longitude}&zoom=20&size=300x300&markers=icon:small-red-cutout|LAT,LON`;

        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        const getLocCoords = async () => {
          try {
            const response = await fetch(reverseUrl, options);
            const responseJSON = await response.json();
            onSetLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              location_name: responseJSON.display_name,
              boundingbox: responseJSON.boundingbox,
              place_id: responseJSON.place_id,
            });
          } catch (err) {
            console.error(
              "Error occured while fetching location co-ordinations",
              err
            );
          }
        };

        const getImgUrl = async () => {
          try {
            const response = await fetch(imgUrl, options);
            onSetImgUrl(response.url);
          } catch (err) {
            console.error("Error occured while geo-reversing location", err);
          }
        };

        getLocCoords();
        getImgUrl();
      },
      (err) => {
        console.error(err.message);
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }
};
