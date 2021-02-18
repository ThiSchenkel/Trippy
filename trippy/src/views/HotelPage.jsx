import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Card from "../components/HotelInfo/Card";
import Gallery from "../components/HotelInfo/Gallery";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: "",
      location: {
        lat: 0,
        lon: 0,
      },
      commodities: "",
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/1000/600/",
        },
      ],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          images: data.result.pictures.map((pic) => {
            return {
              original: pic,
              thumbnail: pic,
            };
          }),
          hotel: data.result,
          location: data.result.location,
          commodities: data.result.commodities,
        });
        console.log(this.state.hotel, "state");
        console.log(this.state.location, "state");
        console.log(this.state.commodities, "state");
        console.log(this.state.images, "state");
      });
  }

  render() {
    return (
      <div>
        <h1>helooooo</h1>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Gallery images={this.state.images}></Gallery>
            </div>
          </div>
        </div>

        <Card
          name={this.state.hotel.name}
          price={this.state.hotel.price}
          address={this.state.hotel.address}
          rating={this.state.hotel.stars}
          commodities={this.state.commodities}
          lat={this.state.location.lat}
          lon={this.state.location.lon}
          popAddresse={this.state.hotel.address}
          popPrice={this.state.hotel.price}
        ></Card>
      </div>
    );
  }
}

export default HotelPage;
