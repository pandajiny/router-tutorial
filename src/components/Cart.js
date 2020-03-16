// Don't Need to be logged in for Client

import React from "react";
import { useHistory } from "react-router-dom";

const Cart = props => {
  let history = useHistory();
  return (
    <div>
      <p>Cart</p>
      <button onClick={() => history.goBack()}>Go Back!</button>
      <button onClick={() => history.push("/")}>Go Home!</button>
    </div>
  );
};

export default Cart;
