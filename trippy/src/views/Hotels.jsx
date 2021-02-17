import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HotelCard from "../components/HotelCard";

class Hotels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/city/${this.props.match.params.city}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hotels: data.results,
        });
        console.log(this.state.hotels, "state");
      });
  }

  render() {
    return (
      <div>
        {this.state.hotels.map((hotel) => {
          return (
            <HotelCard
              pictures={hotel.pictures}
              rating={hotel.stars}
              name={hotel.name}
              price={hotel.price}
            ></HotelCard>
          );
        })}
      </div>
    );
  }
}
export default Hotels;
