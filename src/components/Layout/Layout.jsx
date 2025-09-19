import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";
import "../Layout/style.css";

const Layout = ({ children }) => {
  const { user } = useUserContext();
  return (
    <div>
      <div className="container_nav">
        <ul className="nav">
          <li>Inicio</li>
          <li>Eventos</li>
          <li>Item 1</li>
          {user ? (
            <Link to="/profile">Perfil</Link>
          ) : (
            <>
              <Link to="/login">Entrar</Link>
              <Link to="/profile">Perfil</Link>
            </>
          )}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
