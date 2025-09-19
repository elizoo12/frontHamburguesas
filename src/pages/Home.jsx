import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="sectionHome">
        <div>
          <h1>Texto de Prueba</h1>
          <h3>Texto de Prueba 2</h3>
        </div>
        <div>
          <img src="src/assets/svg/sectionHome.svg" alt="Imágen Section Home" />
        </div>
      </div>
      <div>
        <h2>Section 2 Prueba</h2>
      </div>
    </>
  );
};

export default Home;
