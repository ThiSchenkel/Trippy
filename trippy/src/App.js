import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Api from "./utils/Api"


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Api/>
      </div>
    )
  }

}

export default App;
