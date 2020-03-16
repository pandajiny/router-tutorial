import React from "react";
// if you wanna useHistory, please call it from functional component
// import { useHistory } from "react-router-dom";

const CheckLoggedIn = () => {
  // let history = useHistory();

  console.log("loggedin?");

  const getLoggedInState = () => {
    return localStorage.getItem("LoggedInState").toString();
  };

  if (getLoggedInState() === "true") {
    console.log("this user is already LOGGED IN!");
    return true;
  } else {
    console.log("DAMN! this user is Logged out!");
    console.log(getLoggedInState());
    // history.push("/login");
    return false;
  }
};

export default CheckLoggedIn;
