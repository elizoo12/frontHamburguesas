import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <nav >
          <ul>
            <li>Inicio</li>
            <li>Eventos</li>
            <Link to="/profile" >profile</Link>
            
          </ul>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
