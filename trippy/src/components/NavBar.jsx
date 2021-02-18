import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Hotels from "../views/Hotels";
import Login from "../views/Login";
import Signup from "../views/Signup";
// import "./App.css";
import styled from "styled-components"; //installation du styled-components

const StyleNavBar = styled.div`
  background: #00a64a;
  color: #767676;
`;

const StyleLink = styled.span`
  color: #fff;
  padding: 10px;
`;

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar navbar-expand-md navbar-light bg-light">
          <StyleNavBar className="container-fluid">
            <Link
              className="navbar-brand"
              style={{ fontSize: "30px" }}
              to="/HomePage"
            >
              <span
                className="material-icons"
                style={{ color: "white", width: "20px" }}
              >
                local_dining
              </span>
              <StyleLink>Trippy</StyleLink>
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
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/Hotels/">
                    {" "}
                    <StyleLink>Hotels</StyleLink>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/Restaurants/">
                    <StyleLink>Restaurants</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login/">
                    <StyleLink>Login</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup/">
                    <StyleLink>Signup</StyleLink>
                  </Link>
                </li>
              </ul>
            </div>
          </StyleNavBar>
        </div>

        <Switch>
          <Route path="/HomePage/">
            <Home />
          </Route>
          <Route path="/Hotels/:city" component={Hotels}></Route>
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
