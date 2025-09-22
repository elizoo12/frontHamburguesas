import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useUserContext } from "../providers/UserProvider";

const Home = () => {
  const { user } = useUserContext();
  return (
    <>
      <Layout />
      <div className="sectionHome">
        <div className="sectionHome_text">
          <h1>Eventos que Inspiran</h1>
          <h3>Conecta, aprende y disfruta experiencias únicas</h3>
          <p>
            Explora, conecta y participa en los mejores eventos cerca de ti.
            Descubre experiencias únicas, comparte momentos con otros y disfruta
            de cada plan sin complicaciones.
          </p>

          <div className="sectionHome_buttons">
            <Link to="/events" className="btn-primary">
              Ver Eventos
            </Link>
            <Link to="/register" className="btn-secondary">
              Regístrate
            </Link>
          </div>
        </div>

        <div className="sectionHome_image">
          <img
            src="src/assets/images/svg/sectionHome.svg"
            alt="Imágen Section Home"
          />
        </div>
      </div>

      <div className="section2">
        <div className="container_section2">
          <h2>
            Lo que hace especial a <span>AuraEvents</span>
          </h2>
          <p>
            Con <strong>AuraEvents</strong> tienes todo lo que necesitas para
            descubrir nuevos planes, organizar tus propios eventos favoritos y
            vivir cada evento sin complicaciones. Queremos que disfrutes más, te
            preocupes menos y hagas de cada experiencia un recuerdo especial.
          </p>

          <div className="advantages">
            <div className="advantage">
              <h3>✨ Variedad de eventos</h3>
              <p>
                Accede a conciertos, talleres, festivales y más en un solo
                lugar.
              </p>
            </div>
            <div className="advantage">
              <h3>📅 Organización sencilla</h3>
              <p>
                Guarda tus favoritos, crea recordatorios personalizados y nunca
                pierdas un evento importante en tu agenda.
              </p>
            </div>
            <div className="advantage">
              <h3>🤝 Comunidad activa</h3>
              <p>
                Conecta con personas con tus mismos intereses y comparte
                experiencias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3_text">
          <h2>Explora nuestra variedad de categorías</h2>
          <hr />
          <div className="categories_box">
            <div className="category_box">
              <p>Categoría 1</p>
            </div>
            <div className="category_box">
              <p>Categoría 2</p>
            </div>
            <div className="category_box">
              <p>Categoría 3</p>
            </div>
            <div className="category_box">
              <p>Categoría 4</p>
            </div>
          </div>
          <p>
            Encuentra planes que realmente te emocionen: desde conciertos y
            talleres hasta festivales y quedadas locales. Guarda tus favoritos,
            filtra por lo que te interesa y disfruta de cada experiencia sin
            complicaciones. <br />
            <br />
            Con AuraEvents, vivir tus eventos nunca había sido tan fácil y
            divertido.
          </p>
        </div>

        <div className="section3_image">
          <img
            src="src/assets/images/svg/section3.svg"
            alt="Ilustración de personas realizando una de muchas actividades"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
