import React from "react";
class DirectBanner extends React.Component {
  render() {
    return (
      <section className="direct-banner">
        <img
          className="img-fluid"
          src={this.props.directBanner}
          alt=""
          srcSet=""
        />
      </section>
    );
  }
}
export default DirectBanner;
