import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Api from "../utils/Api";

class Hotels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      city: [],
    };
  }

  //componentDidMount() {
  //  fetch(`http://localhost:3002/api/hotels/city/${slug}`)
  //    .then((response) => response.json())
  //    .then((data) => {
  //      this.setState({
  //        hotels: data,
  //      });
  //      console.log(this.state.hotels, "state");
  //    });
  //}

  render() {
    return (
      <>
        <h1>Hotel</h1>
      </>
    );
  }
}
export default Hotels;
