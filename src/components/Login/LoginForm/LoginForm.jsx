import "./LoginForm.scss"

function LoginForm(){
  return <form className="LoginForm">
    <label for="user" className="LoginForm__label">Nombre</label>
    <input type="text" name="user" className="LoginForm__input"></input>
    <label for="password" className="LoginForm__label">Contraseña</label>
    <input type="password" name="password" className="LoginForm__input"></input>
    <input type="submit" value="login" className="LoginForm__submit"></input>
</form>
}

export default LoginForm