import React from "react";
class DirectLibraryCarouselItem extends React.Component {
  render() {
    return (
      <div className="direct-library-item">
        <img
          className={`direct-library-img img-fluid ${this.props.active}`}
          src={this.props.slide}
          alt=""
          onClick={this.props.handleClickImage}
        />
      </div>
    );
  }
}
export default DirectLibraryCarouselItem;
