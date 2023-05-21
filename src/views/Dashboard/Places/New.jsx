import React, { useEffect, useState } from "react";
import "./New.scss";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../components/ViewTitle";
import Input from "../../../components/Input";
import Category from "../../../components/Category";
import MapSetPlace from "../../../components/MapSetPlace";
import useFetch from "../../../useFetch";

const categories = ["Restaurante", "hotel", "parque", "piscina"];

function PlaceForm() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [position, setPosition] = useState();
  const { data, error, loading, makeRequest } = useFetch(
    "http://localhost:8000/api/places"
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setName("");
      setImg("");
      setDescription("");
      setCategory(null);
      setPosition(null);
      navigate("/dashboard");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error.message);
    }
  }, [error]);

  const handleOnChange = (event) => {
    let place = event.target.value;
    setName(place);
  };
  const handleOnChangeUrlImg = (event) => {
    let img = event.target.value;
    setImg(img);
  };

  const handleOnChangeDescription = (event) => {
    let description = event.target.value;
    setDescription(description);
  };

  const handleOnChangeCategory = (category) => {
    setCategory(category);
  };

  const handleOnChangePosition = ({ lat, lng }) => {
    setPosition({ lat, lng });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      category,
      position,
      img,
      description,
    };
    makeRequest({ data, method: "POST" });
    console.log(data);
  };

  return (
    <form className="PlaceForm" onSubmit={handleOnSubmit}>
      <Input
        type="text"
        name="name"
        labelText="Nombre"
        onChange={handleOnChange}
        value={name}
      />
      <Input
        type="text"
        name="urlImg"
        labelText="ingrese la url de una imagen"
        onChange={handleOnChangeUrlImg}
        value={img}
      />
      <Input
        type="text"
        name="description"
        labelText="descripción del lugar"
        onChange={handleOnChangeDescription}
        value={description}
      />
      <div className="PlaceForm__category">
        <Category
          handleOnChangeCategory={handleOnChangeCategory}
          categories={categories}
        ></Category>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <MapSetPlace
          handleOnChangePosition={handleOnChangePosition}
        ></MapSetPlace>
      </div>
      <input type="submit" value="agregar" className="PlaceForm__submit" />
    </form>
  );
}

function New() {
  return (
    <div className="New">
      <div>
        <Title newTitle="Nuevo lugar"></Title>
      </div>
      <div className="New__form">
        <PlaceForm></PlaceForm>
      </div>
      <Link to="/dashboard">
        <button className="New__return">volver</button>
      </Link>
    </div>
  );
}
export default New;
