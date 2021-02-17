import React from "react";
import styled from "styled-components";
import style from "../style/style";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Api from "../utils/Api";
import CityCard from "../components/CityCard ";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }
  componentDidMount() {
    Api.getHomeData().then((villes) => {
      this.setState({
        cities: villes,
      });
      console.log(this.state.cities, "cities");
    });
  }

  render() {
    if (this.state.cities.length === 0) {
      return (<p>empty</p>);
    } else if (this.state.cities.length >= 1) {
      this.state.cities.map((ville) => {
        return (
          <div>
            <CityCard name={ville.name} slug={ville.slug} src={ville.source} />
          </div>
        );
      });
    } else {
      return (
        <div>
          <h1>Découvrir le monde</h1>
        </div>
      );
    }
  }
}
export default Home;