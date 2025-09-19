import { Link } from "react-router-dom";
import "../components/Layout/style.css";
const ErrorPage = () => {
  return (
    <>
      <div class="error_page">
        <div class="error_content">
          <h1>404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Link to="/" className="btn_home">
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
