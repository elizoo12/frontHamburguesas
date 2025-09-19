import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <nav style={{ background: "blue" }}>
        <ul>
          <li>Inicio</li>
          <li>Eventos</li>
          <Link to="/profile">profile</Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
