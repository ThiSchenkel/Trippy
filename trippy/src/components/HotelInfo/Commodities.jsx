import React from "react";

class Commodities extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="p-5">Commodities</h1>
        {this.props.commodities.map((icons) => {
          return (
            <span
              style={{
                backgroundColor: "#636363",
                color: "white",
                padding: "4px 16px",
                display: "inline-block",
                borderRadius: "16px",
                marginBottom: "4px",
              }}
            >
              {icons}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Commodities;
