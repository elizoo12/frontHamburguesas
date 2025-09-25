import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, login } from "../services/apiHamburguesa";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
  const { user, setUser } = useUserContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="generalContainer">
        <div className="containerImg">
          <img
            src="src/assets/images/svg/login.svg"
            className="imgLogin"
            alt="Logo"
          />
        </div>
        <div className="containerLogin">
          <Link to="/" className="containerLogin_GoHome">
            ↩ Inicio
          </Link>
          <div className="containerLogin_ImgLogo">
            <img src="src/assets/images/png/logoLogin.png" />
          </div>
          <h2>Inicia Sesión</h2>
          <hr className="hrLogin" />
          <label>Nombre de Usuario</label>
          <input type="text" placeholder="usuario123" ref={usernameRef} />
          <div className="containerInputPassword">
            <label>Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              ref={passwordRef}
            />
            <span
              className="iconoInputPassword"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <button
            onClick={async () => {
              await login(usernameRef.current.value, passwordRef.current.value);
              const loggedUser = await getUser(usernameRef.current.value);
              setUser(loggedUser);
              navigate("/profile");
              localStorage.setItem("user",loggedUser)
            }}
          >
            Acceder
          </button>
          <p className="pLoginRegister">
            ¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
