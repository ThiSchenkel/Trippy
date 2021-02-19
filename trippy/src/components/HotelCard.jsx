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
              e.target.src =
                "https://www.kanuhura.com/sites/default/files/styles/720x460/public/externals/Kanuhura_aerial__57_-1600x1199-1101bbee-2c98-4d6b-8b01-4c10adad8f84.jpg?itok=FCq_mrJL";
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
