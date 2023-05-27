import "./LoginForm.scss";
import Input from "../../../components/Input";
import useFetch from "../../../useFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");
function LoginForm() {
  const { data, loading, error, makeRequest } = useFetch("/sessions/login");

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  }, [error]);
  const handleOnChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleOnChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await makeRequest({ data, method: "POST" });
    console.log(data);
  };
  return (
    <form className="LoginForm" onSubmit={handleOnClick}>
      <Input
        type="email"
        name="email"
        labelText="Correo"
        onChange={handleOnChangeEmail}
      />
      <Input
        type="password"
        name="password"
        labelText="Contraseña"
        onChange={handleOnChangePassword}
      />
      <input type="submit" value="login" className="LoginForm__submit" />
    </form>
  );
}

export default LoginForm;
