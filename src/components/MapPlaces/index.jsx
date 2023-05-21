import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../Map";
import Marker from "../Marker";

const API_KEY = "AIzaSyCEZrA2-qiOdhZhtyOFJvosWAMaX4MbyuQ";
const render = (status) => {
  return <h1>{status}</h1>;
};

function MapPlaces(props) {
  // props llega las positions
  const positions = props.positions;
  const markers = positions.map((position, index) => {
    return (
      <Marker
        position={position}
        handleOnChangePlace={props.handleOnChangePlace}
        placeIndex={index}
        draggable={false}
        key={index + "m"}
      />
    );
  });
  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <Map>{markers}</Map>
    </Wrapper>
  );
}

export default MapPlaces;
