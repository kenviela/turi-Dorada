import { useState } from "react";
import Input from "../../components/Input";
import Landscape from "../../components/Landscape";
import Title from "../../components/ViewTitle";
import "./Signup.scss";

function SignupForm() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();

  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);
  const handleChangeConfirmPassword = (event) =>
    setConfirmPassword(event.target.value);
  const handleOnChangeEmail = (event) => setEmail(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      password,
      confirmPassword,
      email,
    };
    console.log(data);
  };
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
      />
      <Input
        name="confirmPassword"
        type="password"
        labelText="Verificar contraseña"
        onChange={handleChangeConfirmPassword}
      />
      <Input
        name="email"
        type="email"
        labelText="Correo"
        onChange={handleOnChangeEmail}
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
