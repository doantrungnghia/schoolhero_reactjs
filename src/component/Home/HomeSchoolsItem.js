import React from "react";
import link from "../../images/a-tag.svg";
import man from "../../images/man.svg";
import fee from "../../images/money.svg";
import comment from "../../images/comment.svg";
import direction from "../../images/direction.svg";
import star from "../../images/shape-star.svg";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
class HomeSchoolsItem extends React.Component {
  render() {
    return (
      <Col lg="3" md="3" sm="6" xs="12" className="schools-item">
        <Link to={this.props.linkRouter}>
          <div className="schools-item-top">
            <img
              src={this.props.schoolBanner}
              className="img-fluid schools-banner"
              alt=""
            />
            <div className="schools-direction flex-wrapper">
              <img
                className="schools-logo"
                src={this.props.schoolLogo}
                alt=""
              />
              <div>
                <p className="schools-item-name">{this.props.schoolName}</p>
                <ul className="schools-item-score">
                  <li className="schools-item-score-child">
                    <img src={star} alt="" />
                  </li>
                  <li className="schools-item-score-child">
                    <img src={star} alt="" />
                  </li>
                  <li className="schools-item-score-child">
                    <img src={star} alt="" />
                  </li>
                  <li className="schools-item-score-child">
                    <img src={star} alt="" />
                  </li>
                  <li className="schools-item-score-child">
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="schools-item-center">
            <div className="schools-item-center-item flex-base">
              <img src={direction} alt="" />
              <p className="schools-item-info">{this.props.schoolAddress}</p>
            </div>
            <div className="schools-item-center-item flex-base">
              <img src={link} alt="" />
              <p className="schools-item-info"> {this.props.schoolLink}</p>
            </div>
            <div className="schools-item-center-item flex-base">
              <img src={man} alt="" />
              <p className="schools-item-info"> {this.props.schoolKind}</p>
            </div>
            <div className="schools-item-center-item flex-base">
              <img src={fee} alt="" />
              <p className="schools-item-info"> {this.props.schoolFee}</p>
            </div>
            <hr />
            <div className="schools-item-footer">
              <div className="flex-base">
                <img src={comment} alt="" />
                <div className="schools-item-footer-txt">
                  {this.props.schoolLikes}
                </div>
              </div>
              <div className="flex-base">
                <img src={comment} alt="" />
                <div className="schools-item-footer-txt">
                  {this.props.schoolComment}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    );
  }
}
export default HomeSchoolsItem;
