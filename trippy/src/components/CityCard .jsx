import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    return (
      <BrowserRouter>

        <Link to={`/Hotels/${this.props.slug}`} style={{ textDecoration: "none", color: "#767676", fontSize: "16px" }}>



          <img style={{ width: "300px" }} src={src} class="card-img-top" alt={this.props.slug} />
          <p class="card-text" ><span>{this.props.name}</span></p>


        </Link>

      </BrowserRouter>
    );
  }
}
export default CityCard;
