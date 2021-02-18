import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class HotelCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.pictures}
            alt={this.props.name}
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.price}</p>
          <p>{this.props.rating}</p>
        </div>
      </div>
    );
  }
}

export default HotelCard;
