import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useRef, useState, useEffect, cloneElement } from "react";

function Map(props) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  let copyChildren = props.children;

  if (props.children && Array.isArray(props.children)) {
    copyChildren = props.children.map((child) => {
      return cloneElement(child, { map });
    });
  }

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }],
          center: {
            lat: 5.467467597038992,
            lng: -74.67453033896683,
          },
          zoom: 12,
        })
      );
    }
  }, [ref, map]);

  const handleOnClick = (event) => {
    props.handleOnChangePosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      map,
    });
  };

  useEffect(() => {
    if (map) {
      map.addListener("click", handleOnClick);
    }
  }, [map, handleOnClick]);

  return (
    <div ref={ref} style={{ height: "100%" }}>
      {copyChildren}
    </div>
  );
}

export default Map;
