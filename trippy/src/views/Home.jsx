import React from "react";
import "../App.css";
//import styled from "styled-components";
//import style from "../style/style";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import getHomeData from "../utils/Api";
import CityCard from "../components/CityCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    getHomeData().then((res) => {
      this.setState({ cities: res.cities });
    });
  }

  render() {
    if (this.state.cities.length === 0) {
      return <h1>Loading </h1>;
    }
    return (
      <>
        <div className="container">
          <h1>Découvrir le monde</h1>
          {this.state.cities.map((ville) => {
            return (
              <CityCard src={ville.source} slug={ville.slug} name={ville.name}></CityCard>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;