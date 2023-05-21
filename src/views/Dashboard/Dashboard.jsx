import "./Dashboard.scss";
import { Link } from "react-router-dom";
import Title from "../../components/ViewTitle";
import useFetch from "../../useFetch";
import { useEffect, useState } from "react";

/*const places = [
  {
    position: 1,
    name: "parque de las iguanas",
    likes: "5",
  },
  {
    position: 2,
    name: "parque santander",
    likes: "4",
  },
  {
    position: 3,
    name: "catedral",
    likes: "3",
  },
];*/

function TopPlaces() {
  const [places, setPlaces] = useState([]);

  const { data, error, loading, makeRequest } = useFetch(
    "http://localhost:8000/api/dashboard"
  );
  useEffect(() => {
    makeRequest({});
  }, []);

  useEffect(() => {
    if (data) {
      setPlaces(data);
    }
  }, [data]);
  console.log(data);
  return (
    <ul className="TopPlaces">
      <li className="TopPlaces__place">
        {!places.length && "no places yet"}
        {loading && !places.length && "loading places"}
        {places.length > 0 &&
          places.map((place, index) => {
            console.log("place", place);
            return (
              <Place
                position={index + 1}
                name={place.name}
                likes={place.likes}
                key={place._id}
              ></Place>
            );
          })}
      </li>
    </ul>
  );
}

function Place(props) {
  console.log(props);
  return (
    <div className="Place" key={props.key}>
      <div className="Place__position">{props.position}</div>
      <div className="Place__content">
        <div className="Place__name">{props.name} </div>
        <div className="Place__likes">{props.likes}</div>
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
