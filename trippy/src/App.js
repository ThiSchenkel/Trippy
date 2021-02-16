import React from "react";
import Api from './utils/Api';
import Home from './views/Home';
import NavBar from "./components/NavBar";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
         <NavBar/>
        <Home/>
       
        
      </div>
    )
  }

}

export default App;
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";