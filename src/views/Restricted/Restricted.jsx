import Title from "../../components/ViewTitle";
import { Link } from "react-router-dom";
import "./Restricted.scss";
const Restricted = () => {
  return (
    <div className="Restricted">
      <Title newTitle="ERROR 404"></Title>
      <p className="Restricted__msg">
        No cuenta con el acceso a la ruta, inicia sesión para ingresar
      </p>
      <Link to="/login">
        <button className="Restricted__button">Login</button>
      </Link>
    </div>
  );
};

export default Restricted;
