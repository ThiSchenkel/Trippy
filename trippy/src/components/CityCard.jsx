import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    console.log(this.props.src);
    return (
      <>
          <div className="card">
            <img src={src} alt={this.props.slug} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center">{this.props.name}</h5>
            </div>
          </div>
      </>
    );
  }
}
export default CityCard;


