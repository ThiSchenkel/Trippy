import React from "react";
import { Marker, Popup } from "react-leaflet";

class HotelMarker extends React.Component {
  render() {
    return (
      <Popup>
        <h5>{this.props.address}</h5>
        <h5>{this.props.price}€/Nuit</h5>
      </Popup>
    );
  }
}

export default HotelMarker;
