// Don't Need to be logged in for Client

import React from "react";

const Login = () => {
  return (
    <div>
      <p>Login</p>
      <button
        onClick={() => {
          localStorage.setItem("LoggedInState", "true");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          localStorage.setItem("LoggedInState", "false");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
