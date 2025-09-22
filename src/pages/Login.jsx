import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, login } from "../services/apiHamburguesa";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
  const { user, setUser } = useUserContext();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <>
      <input type="text" placeholder="username" ref={usernameRef} />
      <input
        type={viewPassword ? "text" : "password"}
        placeholder="password"
        ref={passwordRef}
      />
      <button
        onClick={() => {
          setViewPassword(!viewPassword);
        }}
      >
        {viewPassword ? "ocult password" : "show password"}
      </button>
      <button
        onClick={async () => {
          await login(usernameRef.current.value, passwordRef.current.value);
          const loggedUser = await getUser(usernameRef.current.value);
          setUser(loggedUser);
        }}
      >
        Login
      </button>
      <Link to="/">Volver al fucking Home</Link>
      <p>Not account yet?</p>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
