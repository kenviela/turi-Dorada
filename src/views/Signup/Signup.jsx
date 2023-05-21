import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Landscape from "../../components/Landscape";
import Title from "../../components/ViewTitle";
import "./Signup.scss";
import useFetch from "../../useFetch";
import { redirect, useNavigate } from "react-router-dom";
function SignupForm() {
  const { data, loading, error, makeRequest } = useFetch(
    "http://localhost:8000/api/sessions/signup"
  );

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data]);
  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);
  const handleChangeConfirmPassword = (event) =>
    setConfirmPassword(event.target.value);
  const handleOnChangeEmail = (event) => setEmail(event.target.value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      return setValidation({
        password: { message: "la contraseña debe ser mayor a 6 caracteres" },
      });
    }
    if (password !== confirmPassword) {
      return setValidation({
        confirmPassword: { message: "la contraseña es diferente" },
      });
    }
    const data = {
      name,
      password,
      confirmPassword,
      email,
    };
    await makeRequest({ data, method: "POST" });
    //console.log(data);
  };
  console.log(error);
  return (
    <form className="Signup__form" onSubmit={handleOnSubmit}>
      <Input
        name="name"
        type="text"
        labelText="Nombre"
        onChange={handleOnChangeName}
      />
      <Input
        name="password"
        type="password"
        labelText="Contraseña"
        onChange={handleOnChangePassword}
        error={validation.password}
      />
      <Input
        name="confirmPassword"
        type="password"
        labelText="Verificar contraseña"
        onChange={handleChangeConfirmPassword}
        error={validation.confirmPassword}
      />
      <Input
        name="email"
        type="email"
        labelText="Correo"
        onChange={handleOnChangeEmail}
        error={error?.email}
      />
      <Input
        name="signup"
        type="submit"
        value="registrarse"
        className="Signup__form__submit"
      />
    </form>
  );
}

function Signup() {
  return (
    <div className="Signup">
      <div className="Signup__title">
        <Title newTitle="turi-Dorada Registro" />
      </div>
      <div className="Signup__landscape">
        <Landscape />
      </div>
      <div className="Signup__form">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
