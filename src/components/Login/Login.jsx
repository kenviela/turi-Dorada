import "./Login.scss"
import LoginForm from "./LoginForm/LoginForm";
function Login() {
  return (
    <div className="Login">
      <h1 className="Login__title">Turi-Dorada Login</h1>
      <img src="http://shorturl.at/gpGZ5" alt="landscape" className="Login__landscape"/>
      <div className="Login__form">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;