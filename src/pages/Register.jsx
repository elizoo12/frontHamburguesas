import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useUserContext } from "../providers/UserProvider";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const { user, setUser } = useUserContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      <div className="generalContainerRegister">
        <div className="containerRegister">
          <Link to="/" className="containerRegister_GoHome">
            ↩ Inicio
          </Link>
          <div className="containerRegister_ImgLogo">
            <img src="src/assets/images/png/logoLogin.png" />
          </div>
          <h2>Empecemos con tus datos</h2>
          <hr className="hrRegister" />
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
          <div className="containerInputPassword2">
            <label>Confirma la contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Repite tu contraseña"
              ref={passwordRef}
            />
            <span
              className="iconoInputPassword"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <label>Fecha de Nacimiento</label>
          <input type="date" max="2010-01-01" />
          <button>Enviar Datos</button>
        </div>
        <div className="containerImg">
          <img
            src="src/assets/images/svg/register.svg"
            className="imgLogin"
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
