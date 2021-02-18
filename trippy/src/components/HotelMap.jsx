import React from "react";
import "../App.css";

// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import HotelMarker from "../components/HotelMarker";

class HotelMap extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Hotels</h1>
                    <div className="col-12">
                        <Map
                            style={{ height: "400px", width: "100%" }}
                            center={[this.props.latitude, this.props.longitude]}
                            zoom={10}
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
                </div>
            </div>
        );
    }
}

export default HotelMap;
