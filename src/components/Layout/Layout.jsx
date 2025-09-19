import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";
import "../Layout/style.css";

const Layout = ({ children }) => {
  const { user } = useUserContext();
  return (
    <div>
      <div className="container_nav">
        <ul className="nav">
          <li><Link to="/">  Inicio </Link></li>
          <li><Link to="/events">Eventos</Link></li>
          {user ? (
            <li><Link to="/profile">Perfil</Link></li>
          ) : (
            <>
              <li><Link to="/login">Entrar</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
            </>
          )}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
