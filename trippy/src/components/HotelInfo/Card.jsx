import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.address}</p>
          <p>{this.props.price}</p>
          <p>{this.props.rating}</p>
          <p>{this.props.commodities}</p>
        </div>
        <div class="grid-container"></div>
        <div className="row">
          <div className="col-12">
            <Map
              center={[this.props.lat, this.props.lon]}
              zoom={12}
              scrollWheelZoom={false}
              style={{ height: "200px", width: "400px" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[this.props.lat, this.props.lon]}>
                <Popup>
                  <p>Adresse:{this.props.popAddresse}</p>
                  <p>Price: {this.props.popPrice}$/nuit</p>
                </Popup>
              </Marker>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
