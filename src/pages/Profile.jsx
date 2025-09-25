import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/stylesComponents/profile.css";
import { useUserContext } from "../providers/UserProvider";

const Profile = () => {
  const [userData, setUserData] = useState();
  const {user,setUser}=useUserContext();
  useEffect(() => {
  }, []);

  return (
    <>
      <div className="container_nav">
        <div>
          <Link to="/" className="link_container_logo">
            <img src="src/assets/images/png/logo.png" alt="LogoImágen" />
            <p>AuraEvents</p>
          </Link>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="cover-image-container">
            <img
              className="cover-image"
              src="/src/assets/images/png/image_large_user.png"
              alt="Imagen de portada del perfil"
            />
            <img
              className="profile-picture"
              src="src/assets/images/png/img-circle.png"
              alt="Foto de perfil del usuario"
            />
          </div>

          <div className="profile-details-section">
            <h1 className="user-name">Alex Johnson</h1>
            <p className="user-bio">???????????????? BIO ??????????????????</p>
          </div>

          <div className="user-info-section">
            <h2>Información de Contacto</h2>
            <div className="detail-item">
              <p className="detail-label">Nombre:</p>
              <p className="detail-value">??????????????????</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Correo Electrónico:</p>
              <p className="detail-value">???????????</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Fecha de Nacimiento:</p>
              <p className="detail-value">??????????????</p>
            </div>
          </div>

          <div className="event-stats">
            <div className="stat-item">
              <p className="stat-number">12</p>
              <p className="stat-label">Eventos asistidos</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">5</p>
              <p className="stat-label">Eventos favoritos</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">3</p>
              <p className="stat-label">Eventos próximos</p>
            </div>
          </div>

          <div className="favorite-events">
            <h2>Mis Eventos Favoritos</h2>
            <div className="event-list">
              <div className="event-item">
                <h3 className="event-title">Concierto de Rock en Vivo</h3>
                <p className="event-date">15 de Enero, 2026</p>
              </div>
              <div className="event-item">
                <h3 className="event-title">Exposición de Arte Moderno</h3>
                <p className="event-date">20 de Febrero, 2026</p>
              </div>
              <div className="event-item">
                <h3 className="event-title">Maratón de la Ciudad</h3>
                <p className="event-date">10 de Marzo, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
