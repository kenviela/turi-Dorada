import "./Login.scss";
import LoginForm from "./LoginForm/LoginForm";
import Title from "../../components/ViewTitle";
function Login() {
  return (
    <div className="Login">
      <div>
        <Title newTitle="Login"></Title>
      </div>
      <img src="/img/isla.jpg" alt="landscape" className="Login__landscape" />
      <div className="Login__form">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
