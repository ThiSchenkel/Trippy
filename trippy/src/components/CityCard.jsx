import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    console.log(this.props.src);
    return (
      <>
        <img src={src} class="card-img-top" alt={this.props.slug} />
        <p class="card-text" ><span>{this.props.name}</span></p>

      </>
    );
  }
}

export default CityCard;
