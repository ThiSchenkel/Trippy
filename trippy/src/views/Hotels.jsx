import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";

class Hotels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      location: {
        lat: 0,
        lon: 0,
      },
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hotels: data.results,
          location: data.center,
        });
        console.log(this.state.hotels, "state");
        console.log(this.state.location, "state");
      });
  }

  render() {
    return (
      <div>
        <div>
          <HotelMap
            latitude={this.state.location.lat}
            longitude={this.state.location.lon}
            price={this.state.hotels.price}
          ></HotelMap>
        </div>
        <div>
          {this.state.hotels.map((hotel) => {
            return (
              <HotelCard
                pictures={hotel.pictures[0]}
                name={hotel.name}
                price={hotel.price}
                rating={hotel.stars}
              ></HotelCard>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Hotels;
