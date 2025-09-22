import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useUserContext } from "../providers/UserProvider";

const Home = () => {
  const { user } = useUserContext();
  return (
    <>
      <Layout />
      <div className="sectionHome">
        <div className="sectionHome-text">
          <h1>Eventos que Inspiran</h1>
          <h3>Conecta, aprende y disfruta experiencias únicas</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus doloremque voluptates, impedit obcaecati reiciendis sint
            inventore beatae ad exercitationem explicabo!
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

        <div className="sectionHome-image">
          <img src="src/assets/svg/sectionHome.svg" alt="Imágen Section Home" />
        </div>
      </div>

      <div className="section2">
        <div className="container_section2">
          <h2>
            Lo que hace especial a <span>AuraEvents</span>
          </h2>
          <p>
            Con AuraEvents tienes todo lo que necesitas para descubrir nuevos
            planes, organizar tus propios eventos favoritos y vivir cada evento
            sin complicaciones. Queremos que disfrutes más, te preocupes menos y
            hagas de cada experiencia un recuerdo especial.
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
        <h2>Explora nuestras categorías</h2>
        <p>
          Descubre todos los tipos de eventos que ofrecemos y encuentra los que
          más te interesan.
        </p>
      </div>
    </>
  );
};

export default Home;
