import React from "react";
// import styled from "styled-components";
// import style from "../style/style";



import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



class CityCard extends React.Component {

  render() {
    return (
      <BrowserRouter>

        <Link to="/Hotels/<city>" >{this.props.source}</Link>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={`http://localhost:3002/img/paris.png/${this.props.cities.source}`} alt={this.props.cities.slug} />
          <div class="card-body">
            <p class="card-text">Nom : {this.props.name}</p>
          </div>
        </div>

        <Switch>
          <Route path="/Hotels/<city>" component={this.props.name} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default CityCard;
