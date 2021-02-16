import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



class CityCard extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/Hotels/<city>" >{this.props.source}</Link>
          <img src={`http://localhost:3002/img/paris.png/${this.props.cities.source}`} class="card-img-top" alt={this.props.cities.source} />
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
