import "./LoginForm.scss";
import Input from "../../../components/Input";
import { useState } from "react";
function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeUsername = (event) => {
    const username = event.target.value;
    setUsername(username);
  };

  const handleOnChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    console.log(data);
  };
  return (
    <form className="LoginForm" onSubmit={handleOnClick}>
      <Input
        type="text"
        name="username"
        labelText="Nombre"
        onChange={handleOnChangeUsername}
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
