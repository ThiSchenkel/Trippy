import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    console.log(this.props.src);
    return (

      <div className="container">
        <div className="row">
          {(this.props.src === "/img/paris.png") ?
            (<div className="col" >
              <img src="http://localhost:3002/img/paris.png" class="card-img-top" alt={this.props.slug} />
              <p class="card-text" ><span>{this.props.name}</span></p>
            </div>) :
            (<div className="col-sm-4 col-md-4" >
              <img src={src} class="card-img-top" alt={this.props.slug} />
              <p class="card-text" ><span>{this.props.name}</span></p>
            </div>)
          }
        </div>
      </div>
    );
  }
}
export default CityCard;
