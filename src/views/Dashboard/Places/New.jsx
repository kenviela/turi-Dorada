import React, { useState } from "react";
import "./New.scss";
import { Link } from "react-router-dom";
import Title from "../../../components/ViewTitle";
import Input from "../../../components/Input";
import Category from "../../../components/Category";
import MapSetPlace from "../../../components/MapSetPlace";

const categories = ["Restaurante", "hotel", "parque", "piscina"];

function PlaceForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const [position, setPosition] = useState();

  const handleOnChange = (event) => {
    let place = event.target.value;
    setName(place);
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
    };
    console.log(data);
  };

  return (
    <form className="PlaceForm" onSubmit={handleOnSubmit}>
      <Input
        type="text"
        name="name"
        labelText="Nombre"
        onChange={handleOnChange}
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
