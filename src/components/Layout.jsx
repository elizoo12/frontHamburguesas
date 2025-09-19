import { Link } from "react-router-dom";
import "../styles/style.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container_nav">
        <ul className="nav">
          <li>Inicio</li>
          <li>Eventos</li>
          <Link to="/profile">profile</Link>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
