import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useRef, useState, useEffect } from "react";
import "./New.scss";

const API_KEY = "AIzaSyCEZrA2-qiOdhZhtyOFJvosWAMaX4MbyuQ";

const render = (status) => {
  return <h1>{status}</h1>;
};

function Map(props) {
  const ref = useRef(null);
  const [map, setMap] = useState();
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({
        center: props.center,
        zoom: props.zoom,
      });
    }
  }, [map, props.center, props.zoom]);
  return <div ref={ref} style={props.style} />;
}

function Category() {
  return (
    <div className="Category">
      <label htmlFor="category" className="Category__label">
        Categoria
      </label>
      <select name="category" className="Category__select">
        <option value="restaurant" className="Category__option">
          restaurante
        </option>
        <option value="hotel" className="Category__option">
          hoteles
        </option>
        <option value="pool" className="Category__option">
          piscinas
        </option>
        <option value="park" className="Category__option">
          parques
        </option>
      </select>
    </div>
  );
}

function PlaceForm() {
  return (
    <form className="PlaceForm">
      <label htmlFor="name" className="PlaceForm__label">
        Nombre
      </label>
      <input type="text" name="name" className="PlaceForm__input" />
      <div className="PlaceForm__category">
        <Category></Category>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <Wrapper apiKey={API_KEY} render={render}>
          <Map
            style={{ height: "100%" }}
            zoom={12}
            center={{
              lat: 5.467467597038992,
              lng: -74.67453033896683,
            }}
          ></Map>
        </Wrapper>
      </div>
      <input type="submit" value="agregar" className="PlaceForm__submit" />
    </form>
  );
}

function New() {
  return (
    <div className="New">
      <h1 className="New__title">Turi-Dorada</h1>
      <div className="New__form">
        <PlaceForm></PlaceForm>
      </div>
      <button className="New__return">volver</button>
    </div>
  );
}
export default New;
