import React from "react";
import Api from "../utils/Api";

// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    let pic = Api.config.host + this.props.src;
    return (
      <div>
        <img src={pic} class="card-img-top" alt={this.props.slug} />
        <p class="card-text">{this.props.name}</p>
      </div>
    );
  }
}

export default CityCard;
s;
