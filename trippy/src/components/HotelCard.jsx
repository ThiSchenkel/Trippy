import React from "react";
import StarsRating from "stars-rating";

class HotelCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.pictures}
            alt={this.props.name}
            style={{ width: "300px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "http://via.placeholder.com/300x200";
            }}
          />
        </div>
        <div>
          <h3>{this.props.name}</h3>
          <h3>Prix : {this.props.price}€/Nuit</h3>
          <StarsRating
            count={5}
            size={24}
            value={this.props.rating}
            edit={false}
            color2={"#ffd700"}
          />
        </div>
      </div>
    );
  }
}

export default HotelCard;
