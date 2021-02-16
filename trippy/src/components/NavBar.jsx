import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Hotels from "../views/Hotels";
import Login from "../views/Login";
import Signup from "../views/Signup";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/HomePage">
              Trippy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/Hotels/">
                    Hotels
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/Restaurants/">
                    Restaurants
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup/">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/HomePage/">
            <Home />
          </Route>
          <Route path="/Hotels/">
            <Hotels />
          </Route>
          <Route path="/Restaurants/">
            <Hotels />
          </Route>
          <Route path="/Login/">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NavBar;
