import React from "react";

class Principale extends React.Component {
  componentDidMount() {
    this.refs.videoStart.play();
  }
  render() {
    return (
      <div class="jumbotron p-0 m-0">
        <video ref="videoStart" class="w-100 p3 videoIndex" autoplay muted loop>
          <source src="../video/Dubrovnik12866.mp4" type="video/mp4" />
        </video>
        <div class="card-img-overlay d-flex h-50 flex-column my-auto align-items-center justify-content-center text-center text-white">
          <h1 class="display-3">Travelers of Covid Time</h1>
          <p class="lead">Bienvenue à l'agence de voyage ATE</p>
          <a class="btn btn-outline-danger" href="./HomePage" role="button">
            Enter
          </a>
        </div>
      </div>
    );
  }
}
export default Principale;
