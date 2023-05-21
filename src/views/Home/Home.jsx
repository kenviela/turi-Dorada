import ViewTitle from "../../components/ViewTitle";
import Landscape from "../../components/Landscape";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("token")
  );
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="Home__title">
        <ViewTitle newTitle="Turi-Dorada" />
      </div>
      <div className="Home__img">
        <Landscape />
      </div>
      <div className="Home__buttons">
        {isAuthenticated ? (
          <>
            <Link to="/places">
              <button>Buscar lugar</button>
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsAuthenticated(null);
              }}
            >
              Cerrar sesion
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
            <Link to="/signup">
              <button>Registrarse</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
