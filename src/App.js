import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Account from "./components/Account";
import CheckLoggedIn from "./functions/CheckLoggedIn";

const App = () => {
  // const CheckLoggedIn = () => {
  //   console.log("check Logged in");
  // };
  return (
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/checkout"}>Checkout</Link>
          </li>
          <li>
            <Link to={"/account"}>Account</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/contact" render={Contact} />
        <Route path="/about" render={About} />
        <Route path="/cart" render={() => <Cart />} history={useHistory()} />
        <Route path="/login" render={Login} />
        {/* <Route path="/checkout" component={Checkout} onEnter={CheckLoggedIn} /> */}
        <Route
          path="/checkout"
          render={() =>
            CheckLoggedIn() ? <Checkout /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/account"
          render={() =>
            CheckLoggedIn() ? <Account /> : <Redirect to="/login" />
          }
        />
        <Route>404 not found</Route>
      </Switch>
    </div>
  );
};

export default App;
