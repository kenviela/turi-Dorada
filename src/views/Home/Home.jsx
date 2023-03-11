import ViewTitle from "../../components/ViewTitle";
import Landscape from "../../components/Landscape";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <div className="Home__title">
        <ViewTitle newTitle="Turi-Dorada" />
      </div>
      <div className="Home__img">
        <Landscape />
      </div>
      <div className="Home__buttons">
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
        <Link to="/signup">
          <button>Registrarse</button>
        </Link>
        <Link to="/places">
          <button>Buscar lugar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
