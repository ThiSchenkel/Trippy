import React from "react";
//import styled from "styled-components";
//import style from "../style/style";
import { Link } from "react-router-dom";
import getHomeData from "../utils/Api";
import CityCard from "../components/CityCard";
import "../components/CityCard.css";


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
        <section id="header" className="jumbotron text-center">
          <h1 className="display-3">Découvrir le monde</h1>
          <h2>Paris</h2>
        </section>
        <div className="d-flex justify-content-center flex-wrap">
        {this.state.cities.map((ville) => {
          return (
            <Link to={`/Hotels/${ville.slug}`}>
              <CityCard
                src={ville.source}
                slug={ville.slug}
                name={ville.name}
                id={ville._id}
              ></CityCard>
            </Link>
          );
        })}
        </div>
      </>
    );
  }
}
export default Home;
