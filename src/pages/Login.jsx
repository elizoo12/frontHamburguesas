import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/apiHamburguesa";

const Login = () => {

  const usernameRef=useRef(null);
  const passwordRef=useRef(null);
  const [viewPassword,setViewPassword]=useState(true);


  return(
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
