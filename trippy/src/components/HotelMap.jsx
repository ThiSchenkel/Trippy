import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class HotelMap extends React.Component {
  render() {
    return (
      <div>
        <Map
          style={{ height: "300px", width: "400px" }}
          center={[this.props.latitude, this.props.longitude]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[this.props.latitude, this.props.longitude]}>
            <Popup>
              <p>{this.props.price}</p>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default HotelMap;
