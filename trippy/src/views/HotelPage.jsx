import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from "../components/HotelInfo/Card";
import Commodities from "../components/HotelInfo/Commodities";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: "",
      location: {
        lat: 0,
        lon: 0,
      },
      commodities: [],
      images: [
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ],
      picture: "https://picsum.photos/id/1019/250/150/",
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
        console.log("state hotel", this.state.hotel);
        console.log("state location", this.state.location);
        console.log("state commodities", this.state.commodities);
        console.log("state images", this.state.images);
      });
  }

  render() {
    return (
      <>
            <h1 style={{ textAlign: "center ", paddingTop: "36px" }}>
              Bienvenue chez {this.state.hotel.name}
            </h1>

            <Commodities commodities={this.state.commodities}></Commodities>
            <Card
              name={this.state.hotel.name}
              image={this.state.picture}
              price={this.state.hotel.price}
              address={this.state.hotel.address}
              rating={this.state.hotel.stars}
              phone={this.state.hotel.phone}
              lat={this.state.location.lat}
              lon={this.state.location.lon}
              popAddress={this.state.hotel.address}
              popPrice={this.state.hotel.price}
            ></Card>
  
      </>
    );
  }
}

export default HotelPage;
//import Gallery from "../components/HotelInfo/Gallery";
//<div className="container">
//  <Gallery images={this.state.images}></Gallery>
//</div>;
