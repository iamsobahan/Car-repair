import React from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInGoogle } = useAuth();
  return (
    <div className=" container mt-5">
      <h2>Login</h2>
      <br />
      <button onClick={signInGoogle} className="btn btn-warning">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
