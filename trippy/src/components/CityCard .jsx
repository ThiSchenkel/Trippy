import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} class="card-img-top" alt={this.props.slug} />
        <p class="card-text">{this.props.name}</p>
      </div>
    );
  }
}

export default CityCard;
