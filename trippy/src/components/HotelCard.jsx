import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class HotelCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.pictures} alt="" />
        <p>{this.props.rating}</p>
        <p>{this.props.price}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default HotelCard;
