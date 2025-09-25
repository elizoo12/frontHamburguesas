import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useUserContext } from "../providers/UserProvider";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const { user, setUser } = useUserContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
    <input type="text" placeholder="username" ref={usernameRef} />
    <input type={viewPassword?"text":"password"} placeholder="password" ref={passwordRef} /> <button onClick={()=>{setViewPassword(!viewPassword)}}>{viewPassword?"ocult password":"show password"}</button>
     <input type={viewPassword?"text":"password"} placeholder="confirm password" ref={passwordRef} />
    <button>rGISTER</button>

    </>
  );
};

export default Register;
