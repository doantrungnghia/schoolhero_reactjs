import React from "react";
import star from "../../images/star.svg";
import avatar from "../../images/school-.svg";
class DirectCommentItem extends React.Component {
  render() {
    return (
      <div className="direct-comment-item">
        <div className="row">
          <div className="col-lg-1 col-sm-2 col-xs-2">
            <img
              className="img-fluid direct-comment-avt"
              src={avatar}
              alt=""
              srcSet=""
            />
          </div>
          <div className="col-lg-11 col-sm-10 col-xs-7">
            <div className="direct-comment-name">{this.props.commentName}</div>
            <div className="direct-comment-date">
              {this.props.commentTime} {this.props.commentDate}
            </div>
            <ul>
              <li className="direct-comment-score">
                <img src={star} alt="" />
              </li>
              <li className="direct-comment-score">
                <img src={star} alt="" />
              </li>
              <li className="direct-comment-score">
                <img src={star} alt="" />
              </li>
              <li className="direct-comment-score">
                <img src={star} alt="" />
              </li>
              <li className="direct-comment-score">
                <img src={star} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-sm-2 col-xs-4" />
          <div className="col-lg-11 col-sm-10 col-xs-8">
            <div className="direct-comment-txt">
              {this.props.commentContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DirectCommentItem;
