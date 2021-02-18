import React from "react";
import { Marker, Popup } from "react-leaflet";

class HotelMarker extends React.Component {
  render() {
    return (
      <Popup>
        <p>{this.props.price}</p>
      </Popup>
    );
  }
}

export default HotelMarker;
