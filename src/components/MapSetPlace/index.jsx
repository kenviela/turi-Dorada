import Map from "../Map";
import Marker from "../Marker";
import { useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const API_KEY = "AIzaSyCEZrA2-qiOdhZhtyOFJvosWAMaX4MbyuQ";
const render = (status) => {
  return <h1>{status}</h1>;
};
function MapSetPlace(props) {
  const [inputMarker, setInputMarker] = useState();
  const handleOnChangePosition = ({ lat, lng, map }) => {
    setInputMarker(
      <Marker
        position={{ lat, lng }}
        map={map}
        draggable={true}
        handleOnChangePosition={props.handleOnChangePosition}
      ></Marker>
    );
    props.handleOnChangePosition({
      lat,
      lng,
    });
  };
  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <Map handleOnChangePosition={handleOnChangePosition}>{inputMarker}</Map>
    </Wrapper>
  );
}

export default MapSetPlace;
