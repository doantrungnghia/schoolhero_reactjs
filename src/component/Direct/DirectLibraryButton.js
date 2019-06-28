import React from "react";
class DirectLibraryButton extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.handleClick}
        id={this.props.id}
        className={`direct-library-nav ${this.props.active}`}
      >
        {this.props.title}
      </li>
    );
  }
}
export default DirectLibraryButton;
