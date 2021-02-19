import React from "react";
import "../App.css";
import styled from "styled-components";


const StyleLinkP = styled.p`
  color: #2f727e;
  text-align : center;
`;

class CityCard extends React.Component {
  render() {
    const src = "http://localhost:3002" + this.props.src;
    console.log(this.props.src);
    return (
      <>
        <StyleLinkP>{this.props.name}</StyleLinkP>
        <img src={src} class="rounded shadow p-3 mb-5 bg-white" alt={this.props.slug} />
      </>
    );
  }
}
export default CityCard;
