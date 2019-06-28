import React from "react";
import { Link } from "react-router-dom";
import changeURL from "../../function/changeURL";
class HomeSearchItem extends React.Component {
  render() {
    return (
      <li>
        <Link
          to={changeURL(this.props.schoolName)}
          className="flex-center-center"
        >
          <img src={this.props.schoolLogo} className="img-fluid" alt="" />{" "}
          &ensp;
          {this.props.schoolName}
        </Link>
      </li>
    );
  }
}
export default HomeSearchItem;
