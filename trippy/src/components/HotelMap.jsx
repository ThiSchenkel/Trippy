import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import HotelMarker from "../components/HotelMarker";

class HotelMap extends React.Component {
  render() {
    return (
      <div>
        <Map
          style={{ height: "60vh", width: "100%" }}
          center={[this.props.latitude, this.props.longitude]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.hotelPosition
            ? this.props.hotelPosition.map((hotelMarker) => {
                return (
                  <Marker
                    position={[
                      hotelMarker.location.lat,
                      hotelMarker.location.lon,
                    ]}
                  >
                    <HotelMarker price={hotelMarker.price}></HotelMarker>
                  </Marker>
                );
              })
            : null}
        </Map>
      </div>
    );
  }
}

export default HotelMap;
