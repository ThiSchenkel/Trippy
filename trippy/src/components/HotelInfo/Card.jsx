import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import StarsRating from "stars-rating";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.name}</h3>
          <h5>Address: {this.props.address}</h5>
          <h5>Prix : {this.props.price}€/Nuit</h5>
          <h5>phone : {this.props.phone}</h5>
          <StarsRating
            count={5}
            size={24}
            value={this.props.rating}
            edit={false}
            color2={"#ffd700"}
          />
        </div>
        <p>{this.props.commodities}</p>

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
