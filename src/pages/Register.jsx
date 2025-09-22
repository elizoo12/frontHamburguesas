import { useRef, useState } from "react";

const Register = () => {


  const usernameRef=useRef(null);
  const passwordRef=useRef(null);
  const [viewPassword,setViewPassword]=useState(true);



  return(
    <>
    <input type="text" placeholder="username" ref={usernameRef} />
    <input type={viewPassword?"text":"password"} placeholder="password" ref={passwordRef} /> <button onClick={()=>{setViewPassword(!viewPassword)}}>{viewPassword?"ocult password":"show password"}</button>
     <input type={viewPassword?"text":"password"} placeholder="confirm password" ref={passwordRef} />
    <button>rGISTER</button>

    </>
  );
};

export default Register;
