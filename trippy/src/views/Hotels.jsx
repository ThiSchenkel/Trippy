import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";
import { Link } from "react-router-dom";
import "../components/HotelCard.css";

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
            hotelPosition={this.state.hotels}
          ></HotelMap>
        </div>
        <div className="d-flex justify-content-around flex-wrap p-5">
          {this.state.hotels.map((hotel) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/Hotel/${hotel._id}`}
              >
                <HotelCard
                  pictures={hotel.pictures[0]}
                  name={hotel.name}
                  id={hotel._id}
                  price={hotel.price}
                  rating={hotel.stars}
                  address={hotel.address}
                ></HotelCard>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Hotels;
