import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapHotel extends React.Component {
  render() {
    return (
      <div>
        <Map
          center={[this.props.latitude, this.props.longitude]}
          zoom={12}
          style={{ height: "50vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[this.props.latitude, this.props.longitude]}>
            <Popup>
              <b>{this.props.name}</b>
              <b>{this.props.address}</b>
            </Popup>
          </Marker>
        </Map>
        ;
      </div>
    );
  }
}

export default MapHotel;
