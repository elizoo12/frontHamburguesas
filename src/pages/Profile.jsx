import { Link } from "react-router-dom";
import "../assets/styles/profile.css"

const Profile = () => {
    return (
        
        <>

            <div className="navbar">
                <div className="nav-home">

                    <img className="link_logo" src="src/assets/images/png/logo.png" alt="logoImage" />
                    <Link to={"/"} >AuraEvents</Link>

                </div>

            </div>

            <div className="img-phrase" >

                <img src="/src/assets/images/jpg/espejo.jpg" alt="Men watching in the mirrow" />

            </div>

        </>
    );
};

export default Profile;