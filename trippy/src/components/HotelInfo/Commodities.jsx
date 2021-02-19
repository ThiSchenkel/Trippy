import React from "react";

class Commodities extends React.Component {
  render() {
    return (
      <p>
        {this.props.commodities.map((icons) => {
          return <p>{icons}</p>;
        })}
      </p>
    );
  }
}

export default Commodities;
