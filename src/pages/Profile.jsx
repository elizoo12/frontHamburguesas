import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/stylesComponents/profile.css"


const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

    useEffect(() => {

    },[]);


    return (
        
        <>
            <div className="navbar">
                <div className="nav-home" onClick={() => {navigate("/")}} >

                    <img className="link_logo" src="src/assets/images/png/logo.png" alt="logoImage" />
                    <p to={"/"} >AuraEvents</p>

                </div>

            </div>

            <div className="content">

                <div className="data-user">
                    <div className="images">
                        <img className="img-portada-large" src="/src/assets/images/png/image_large_user.png" alt="imagen de portada" />
                        <img className="img-circle" src="/src/assets/images/png/img-circle.png" alt="imagen circular de portada" />
                    </div>

                </div>

            </div>

        </>
    );
};

export default Profile;