import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../components/Category";
import Title from "../../components/ViewTitle";
import "./Places.scss";

const categories = ["Restaurante", "hotel", "parque", "piscina"];

function PlaceForm() {
  const [category, setCategory] = useState();

  const handleOnChangeCategory = (category) => {
    setCategory(category);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const place = {
      category,
    };
    console.log(place);
  };
  return (
    <form onSubmit={handleOnSubmit} className="PlaceForm">
      <Category
        categories={categories}
        handleOnChangeCategory={handleOnChangeCategory}
      />
      <Link to="/places/show">
        <input type="submit" value="Buscar" className="PlaceForm__button" />
      </Link>
    </form>
  );
}
function Places() {
  return (
    <div className="Places">
      <div className="Places__title">
        <Title newTitle="Turi-Dorada" />
      </div>
      <h2>¿Qué lugar buscas?</h2>
      <div className="Places__category">
        <PlaceForm></PlaceForm>
      </div>
      <div className="Places__buttons">
        <Link to="/">
          <button className="Places__buttons__return">Volver</button>
        </Link>
      </div>
    </div>
  );
}

export default Places;
