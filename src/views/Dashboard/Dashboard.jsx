import "./Dashboard.scss";
import { Link } from "react-router-dom";
import Title from "../../components/ViewTitle";
const places = [
  {
    position: 1,
    name: "parque de las iguanas",
    rating: "5",
  },
  {
    position: 2,
    name: "parque santander",
    rating: "4",
  },
  {
    position: 3,
    name: "catedral",
    rating: "3",
  },
];

function TopPlaces() {
  return (
    <ul className="TopPlaces">
      <li className="TopPlaces__place">
        {places.map((place) => {
          return (
            <Place
              position={place.position}
              name={place.name}
              rating={place.rating}
            ></Place>
          );
        })}
      </li>
    </ul>
  );
}

function Place(props) {
  return (
    <div className="Place">
      <div className="Place__position">{props.position}</div>
      <div className="Place__content">
        <div className="Place__name">{props.name} </div>
        <div className="Place__rating">{props.rating}</div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="Dashboard">
      <div>
        <Title newTitle="Turi-Dorada"></Title>
      </div>
      <div className="Dashboard__topPlaces">
        <TopPlaces></TopPlaces>
      </div>
      <Link to="/dashboard/places/new">
        <button className="Dashboard__addPlace">Nuevo lugar</button>
      </Link>
    </div>
  );
}

export default Dashboard;
