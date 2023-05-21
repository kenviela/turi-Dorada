import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Category from "../../components/Category";
import Title from "../../components/ViewTitle";
import "./Places.scss";
import useFetch from "../../useFetch";

const categories = ["Restaurante", "hotel", "parque", "piscina"];

function PlaceForm() {
  const [category, setCategory] = useState();

  const { data, error, loading, makeRequest } = useFetch(
    "http://localhost:8000/api/places"
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      navigate("/places/show", { state: { places: data } });
    }
  }, [data]);
  const handleOnChangeCategory = (category) => {
    setCategory(category);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const place = {
      category,
    };
    makeRequest({ params: place });
    console.log(place);
  };
  return (
    <form onSubmit={handleOnSubmit} className="PlaceForm">
      <Category
        categories={categories}
        handleOnChangeCategory={handleOnChangeCategory}
      />
      <input type="submit" value="Buscar" className="PlaceForm__button" />
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
