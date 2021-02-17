import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    return (
      <BrowserRouter>
        <Link to={`/Hotels/${this.props.slug}`}>
          <div>
            <img
              style={{ width: "300px" }}
              src={src}
              class="card-img-top"
              alt={this.props.slug}
            />
            <p class="card-text">
              <span>Location :</span> {this.props.name}
            </p>
          </div>
        </Link>
      </BrowserRouter>
    );
  }
}
export default CityCard;
