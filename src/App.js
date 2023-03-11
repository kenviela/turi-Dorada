import "./App.scss";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import New from "./views/Dashboard/Places/New.jsx";
import Home from "./views/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Places from "./views/Places/Places";
import Signup from "./views/Signup/Signup";
import Show from "./views/Places/Show/Show";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/places/new" element={<New />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/show" element={<Show />} />
        <Route
          path="*"
          element={
            <div>
              pagina no existe <br />
              <Link to="/dashboard">volver al dashboard</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
