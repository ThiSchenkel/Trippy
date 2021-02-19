import React from "react";

class Commodities extends React.Component {
  render() {
    return (
      <div>
        {this.props.commodities.map((icons) => {
          return <p>{icons}</p>;
        })}
      </div>
    );
  }
}

export default Commodities;
