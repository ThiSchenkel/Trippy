import React from "react";
import ImageGallery from "react-image-gallery";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery items={this.props.images} />;
      </div>
    );
  }
}

export default Gallery;
