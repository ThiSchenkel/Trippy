import React from "react";
import StarsRating from "stars-rating";

class HotelCard extends React.Component {
  render() {
    return (
      <div class="image-flip">
        <div class="mainflip flip-0">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p>
                  <img
                    class=" img-fluid"
                    src={this.props.pictures}
                    alt={this.props.name}
                    style={{ width: "300px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.kanuhura.com/sites/default/files/styles/720x460/public/externals/Kanuhura_aerial__57_-1600x1199-1101bbee-2c98-4d6b-8b01-4c10adad8f84.jpg?itok=FCq_mrJL";
                    }}
                  />
                </p>
                <h4 class="card-title">{this.props.name}</h4>
                <p class="card-text">{this.props.name}</p>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">{this.props.name}</h4>
                <p class="card-text">{this.props.address}</p>
                <p class="card-text">
                  Prix : {this.props.price}€/Nuit
                  <StarsRating
                    count={5}
                    size={24}
                    value={this.props.rating}
                    edit={false}
                    color2={"#ffd700"}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelCard;
