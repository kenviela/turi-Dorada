import Title from "../../../components/ViewTitle";
import "./Show.scss";
import MapPlaces from "../../../components/MapPlaces";

const positions = [
  { lat: 5.45680349736945, lng: -74.67298270436524 },
  { lat: 5.497130629553907, lng: -74.67916251393555 },
  { lat: 5.456803497369437, lng: -74.64963675709961 },
];
function PlaceDescription() {
  return (
    <div className="PlaceDescription">
      <div className="PlaceDescription__img">
        <div className="PlaceDescription__img__title">
          <Title newTitle="restaurante 1"></Title>
        </div>
        <img
          src="https://prod-be-moon-brand.s3.amazonaws.com/small_thg_Casa_Mia_01_restaurantes_carouselcenter_2160x1080px_jpg_f5d0c2e826.jpg"
          alt="restaurante"
        />
        <img
          src="https://prod-be-moon-brand.s3.amazonaws.com/small_thg_Casa_Mia_01_restaurantes_carouselcenter_2160x1080px_jpg_f5d0c2e826.jpg"
          alt="restaurante"
        />
      </div>
      <div className="PlaceDescription__description">
        <h2>Descripción</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

function Show() {
  return (
    <div className="Show">
      <div className="Show__title">
        <Title newTitle="Turi-Dorada"></Title>
      </div>
      <div
        className="Show__map"
        style={{
          height: "400px",
          width: "95%",
          marginTop: "10px",
        }}
      >
        <MapPlaces positions={positions} />
      </div>
      <div className="Show__description">
        <PlaceDescription />
      </div>
    </div>
  );
}

export default Show;
