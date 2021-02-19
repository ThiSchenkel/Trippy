import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import HotelPage from "../views/HotelPage";
import Hotels from "../views/Hotels";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Error404 from "../views/Error404";
import Restaurants from "../views/Restaurants";
// import "./App.css";
import styled from "styled-components"; //installation du styled-components

const StyleNavBar = styled.div`
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
        <div className="navbar navbar-expand-md navbar-light bg-dark">
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
                  <Link className="nav-link active" to="/Hotels">
                    <StyleLink>Hotels</StyleLink>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/Restaurants">
                    <StyleLink>Restaurants</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    <StyleLink>Login</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup">
                    <StyleLink>Sign up</StyleLink>
                  </Link>
                </li>
              </ul>
            </div>
          </StyleNavBar>
        </div>

        <Switch>
          <Route path exact="/">
            <Home />
          </Route>

          <Route path="/HomePage">
            <Home />
          </Route>
          <Route path="/Hotels/:city" component={Hotels}></Route>
          <Route path="/Hotel/:id" component={HotelPage}></Route>

          <Route path="/Restaurants">
            <Restaurants />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default NavBar;
