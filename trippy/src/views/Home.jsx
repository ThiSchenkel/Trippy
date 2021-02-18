import React from "react";
//import styled from "styled-components";
//import style from "../style/style";
import { Link } from "react-router-dom";
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
      <div>
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
    );
  }
}
export default Home;
