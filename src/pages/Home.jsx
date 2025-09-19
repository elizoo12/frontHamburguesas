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

          <div className="cta-buttons">
            <button className="btn-primary">Ver Eventos</button>
            <button className="btn-secondary">Regístrate</button>
          </div>
        </div>

        <div className="sectionHome-image">
          <img src="src/assets/svg/sectionHome.svg" alt="Imágen Section Home" />
        </div>
      </div>

      <div className="section2">
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
