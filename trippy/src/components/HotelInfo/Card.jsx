import React from "react";
class Card extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.address}</p>
        <p>{this.props.price}</p>
        <p>{this.props.rating}</p>
      </div>
    );
  }
}
export default Card;
