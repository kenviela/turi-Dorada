import "./App.scss";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import New from "./views/Dashboard/Places/New.jsx";
import Home from "./views/Home/Home";
import {
  Routes,
  Route,
  Link,
  redirect,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Places from "./views/Places/Places";
import Signup from "./views/Signup/Signup";
import Show from "./views/Places/Show/Show";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Restricted from "./views/Restricted/Restricted";

const roles = { ADMIN: "ADMIN", USER: "USER" };
function PrivateRoute({ component: Component, role }) {
  const { data, error, loading, makeRequest } = useFetch("/sessions/verify");
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    makeRequest({ data: { role, token }, method: "POST" });
  }, []);
  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
    }
  }, [data]);

  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      navigate("/restricted");
    }
  }, [error]);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (isAuthenticated && !loading) {
    console.log("valido");
    return Component;
  }
  return <div>falladon</div>;
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />*/}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute component={<Dashboard />} role={roles.ADMIN} />
          }
        />
        {/*<Route path="/dashboard/places/new" element={<New />} />*/}
        <Route
          path="/dashboard/places/new"
          element={<PrivateRoute component={<New />} role={roles.ADMIN} />}
        />
        <Route
          path="/places"
          element={<PrivateRoute component={<Places />} role={roles.USER} />}
        />
        <Route
          path="/places/show"
          element={<PrivateRoute component={<Show />} role={roles.USER} />}
        />
        {/*<Route path="/places/show" element={<Show />} />*/}

        <Route path="/restricted" element={<Restricted />} />
        {/*<Route path="*" element={<Restricted />} />*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
