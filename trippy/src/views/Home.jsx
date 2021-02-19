import React from "react";
//import styled from "styled-components";
//import style from "../style/style";
import { Link } from "react-router-dom";
import getHomeData from "../utils/Api";
import CityCard from "../components/CityCard";
import "./Home.css";


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
        <section id="header" className="jumbotron d-flex align-items-center justify-content-center">
          <h1 className="display-3 text-white">Découvrez le monde</h1>
        </section>
        <div>
          <h2 className="text-center mb-5 fs-1">Choisissez une destination</h2>
          <div className="d-flex justify-content-around flex-wrap">
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
        </div>
      </>
    );
  }
}
export default Home;
