import { useState } from "react";

function Category(props) {
  const [option, setOption] = useState();
  const handleOnChange = (event) => {
    const category = event.target.value;
    setOption(category);
    props.handleOnChangeCategory(category);
  };
  const options = props.categories.map((category, index) => {
    return (
      <option value={category} key={index}>
        {category}
      </option>
    );
  });
  return (
    <div className="Category">
      <label htmlFor="category" className="Category__label">
        Categoria
      </label>
      <select
        name="category"
        className="Category__select"
        onChange={handleOnChange}
        defaultValue=""
      >
        <option disabled value="">
          selecciona una categoria
        </option>
        {options}
      </select>
    </div>
  );
}

export default Category;
