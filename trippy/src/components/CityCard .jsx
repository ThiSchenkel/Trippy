import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


class CityCard extends React.Component {

  render() {
    const src = "http://localhost:3002" + this.props.src

    return (
      <BrowserRouter>
        <div>
          <Link to="/Hotels/<city>" >{this.props.source}</Link>
          <img src={`http://localhost:3002/img/paris.png ${src}`} class="card-img-top" alt={this.props.slug} />
          <p class="card-text">Nom : {this.props.name}</p>
          <p class="card-text">Slug? {this.props.slug}</p>
        </div>

        <Switch>
          <Route path="/Hotels/<city>" component={this.props.source} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CityCard;
