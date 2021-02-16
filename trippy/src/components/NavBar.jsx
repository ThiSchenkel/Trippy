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
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/HomePage">
              Trippy
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link className="nav-link active" to="/Hotels/">
                    Hotel
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/Resturants/">
                    Resturants
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/Login/">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
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
          <Route path="/Resturants/">
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
