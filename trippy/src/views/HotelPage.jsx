import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Card from "../components/HotelInfo/Card";
import Gallery from "../components/HotelInfo/Gallery";
import MapHotel from "../components/HotelInfo/MapHotel";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: "",
      location: {
        lat: 48,
        lon: 0,
      },
      commodities: [],
      images: {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hotels: data.results,
          location: data.results.location,
          commodities: data.results.commodities,
          images: data.results.pictures,
        });
        console.log(this.state.hotels, "state");
        console.log(this.state.location, "state");
        console.log(this.state.commodities, "state");
        console.log(this.state.images, "state");
      });
  }

  render() {
    return (
      <div>
        <Gallery images={this.state.image}></Gallery>
        <Card
          name={this.state.hotel.name}
          price={this.state.hotel.price}
          address={this.state.hotel.address}
          rating={this.state.hotel.stars}
        ></Card>
        <MapHotel
          latitude={this.state.location.lat}
          longitude={this.state.location.lon}
        ></MapHotel>
      </div>
    );
  }
}

export default HotelPage;
