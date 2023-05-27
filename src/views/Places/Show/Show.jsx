import Title from "../../../components/ViewTitle";
import "./Show.scss";
import MapPlaces from "../../../components/MapPlaces";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../useFetch";
const Swal = require("sweetalert2");
/*const placesInfo = [
  {
    name: "hotel estrella",
    img: "https://prod-be-moon-brand.s3.amazonaws.com/small_thg_Casa_Mia_01_restaurantes_carouselcenter_2160x1080px_jpg_f5d0c2e826.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    position: { lat: 5.45680349736945, lng: -74.67298270436524 },
  },
  {
    name: "piscina Marandua",
    img: "https://nautilusbr.com/dev/wp-content/uploads/2092-scaled.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    position: { lat: 5.497130629553907, lng: -74.67916251393555 },
  },
  {
    name: "parque de las iguana",
    img: "https://parquesalegres.org/wp-content/uploads/2017/07/Parques.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    position: { lat: 5.456803497369437, lng: -74.64963675709961 },
  },
];*/

function PlaceDescription(props) {
  const [heartClicked, setHeartClicked] = useState("");

  const { data, error, loading, makeRequest } = useFetch(
    `/places/show/like/${props.id}`
  );
  useEffect(() => {
    if (data) {
      Swal.fire({
        title: "thank you",
        text: data.message,
        icon: "success",
        confirmButtonText: "ok",
      });
      setHeartClicked(" clicked");
    }
  }, [data]);

  const handleOnClick = (event) => {
    makeRequest({ method: "PATCH" });
  };
  return (
    <div className="PlaceDescription">
      <div className="PlaceDescription__img">
        <div className="PlaceDescription__img__title">
          <Title newTitle={props.name}></Title>
        </div>
        <img src={props.img} alt={props.name} />
      </div>
      <div className="PlaceDescription__description">
        <h2>Descripción</h2>
        <p>{props.description}</p>
      </div>
      <button
        className={`PlaceDescription__buttonLike${heartClicked}`}
        onClick={handleOnClick}
      >
        <img
          className="PlaceDescription__buttonLike__heart"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMSAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMTAxIDQuNDE3UzguODk1LjIwNyA1LjExMS4yMDdjLTQuNDY1IDAtMTAuOTY3IDYuODQ2IDUuMDgyIDE3LjU5MkMyNS4yMzcgNy4wMyAxOS42NjUuMjAyIDE1LjUwMS4yMDJjLTQuMTYyIDAtNS40IDQuMjE1LTUuNCA0LjIxNXoiIGZpbGw9IiNGRjZFNkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
        />
      </button>
    </div>
  );
}

function Show() {
  const placesInfo = useLocation().state.places;
  const positions = placesInfo.map(({ position }) => position);

  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [description, setDescription] = useState();
  const [id, setId] = useState();

  const handleOnChangePlace = (index) => {
    const { name, img, description, _id } = placesInfo[index];
    setId(_id);
    setName(name);
    setImg(img);
    setDescription(description);
  };

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
        <MapPlaces
          positions={positions}
          handleOnChangePlace={handleOnChangePlace}
        />
      </div>
      <div className="Show__description">
        {name && (
          <PlaceDescription
            id={id}
            name={name}
            img={img}
            description={description}
          />
        )}
      </div>
    </div>
  );
}

export default Show;
