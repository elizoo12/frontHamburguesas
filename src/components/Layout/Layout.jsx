import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";
import "../Layout/style.css";

const Layout = ({ children }) => {
  const { user } = useUserContext();
  return (
    <div>
      <div className="container_nav">
        <div>
          <Link to="/" className="link_container_logo">
            <img src="src/assets/images/png/logo.png" alt="LogoImágen" />
            <p>AuraEvents</p>
          </Link>
        </div>
        <div className="container_perfil">
          {user ? (
            <Link to="/profile">
              <img src="src/assets/images/png/profile.png" alt="ImágenPerfil" />
              Mis datos
            </Link>
          ) : (
            <Link to="/login">
              <img src="src/assets/images/png/login.png" alt="ImágenPerfil" />
              Entrar
            </Link>
          )}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
