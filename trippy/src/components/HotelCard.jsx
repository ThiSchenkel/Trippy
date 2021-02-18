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
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "http://via.placeholder.com/300x200"
            }
            } />
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
