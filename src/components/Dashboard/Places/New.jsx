import "./New.scss";

function Category() {
  return (
    <div className="Category">
      <label for="category" className="Category__label">
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
      <label for="name" className="PlaceForm__label">
        Nombre
      </label>
      <input type="text" name="name" className="PlaceForm__input" />
      <div className="PlaceForm__category">
        <Category></Category>
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
