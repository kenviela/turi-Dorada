import { useState, useEffect } from "react";

function Marker(props) {
  const [marker, setMarker] = useState();
  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        position: props.position,
        map: props.map,
        draggable: props.draggable,
      });
    }
  }, [marker, props.position, props.map, props.draggable]);

  const handleOnChangeMouseup = (event) => {
    props.handleOnchangePosition &&
      props.handleOnChangePosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
  };
  useEffect(() => {
    if (marker) {
      marker.addListener("mouseup", handleOnChangeMouseup);
    }
  }, [marker]);

  return null;
}

export default Marker;
