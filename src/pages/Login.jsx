import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, login } from "../services/apiHamburguesa";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
  const { user, setUser } = useUserContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <input type="text" placeholder="username" ref={usernameRef} />
    <input type={viewPassword?"text":"password"} placeholder="password" ref={passwordRef} /> <button onClick={()=>{setViewPassword(!viewPassword)}}>{viewPassword?"ocult password":"show password"}</button>
    <button
    onClick={async()=>await login(usernameRef.current.value,passwordRef.current.value)}
    >Login</button>

    <p>Not account yet?</p>
    <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
