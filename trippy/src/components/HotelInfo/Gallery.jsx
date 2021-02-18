import React from "react";
import ImageGallery from "react-image-gallery";

class Gallery extends React.Component {
  render() {
    return <ImageGallery items={this.props.images} />;
  }
}

export default Gallery;
