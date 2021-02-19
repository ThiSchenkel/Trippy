import React from "react";

class Commodities extends React.Component {
  render() {
    return (
      <div>
        {this.props.commodities.map((icons) => {
          return <button>{icons}</button>;
        })}
      </div>
    );
  }
}

export default Commodities;
