import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import StarsRating from "stars-rating";
import "./Card.css"

class Card extends React.Component {
  render() {
    return (
      <>
        <div>
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
        <div class="container-fluid">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-9 col-lg-6">
              <div className="card-flip">
                <div className="flip">
                  <div className="front">
                    <div className="card">
                      <img className="card-img-top" src={this.props.image} alt={this.props.name} style={{ height: "180px", width: "100%", display: "block" }} />
                      <div className="card-block">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">
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
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="card">
                      <div className="card-block">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-subtitle text-muted">
                          <StarsRating
                            count={5}
                            size={24}
                            value={this.props.rating}
                            edit={false}
                            color2={"#ffd700"}
                          />
                        </p>
                      </div>
                      <img className="card-img-top" src={this.props.image} alt={this.props.name} style={{ height: "180px", width: "100%", display: "block" }} />
                      <div className="card-block">
                        <p className="card-text">
                          <h5>Address: {this.props.address}</h5>
                          <h5>Prix : {this.props.price}€/Nuit</h5>
                          <h5>phone : {this.props.phone}</h5>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>{this.props.commodities}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;

