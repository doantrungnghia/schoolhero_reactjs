import React from "react";
import img from "../../images/nav-img.svg";
import info from "../../images/nav-info.svg";
import fee from "../../images/nav-fee.svg";
import comment from "../../images/nav-comment.svg";
import { Container } from "reactstrap";
class DirectNav extends React.Component {
  render() {
    return (
      <div className="direct-nav">
        <Container className="direct-nav-container">
          <ul className="flex-wrapper">
            <li>
              <a href="#image" className="flex-base">
                <img src={img} alt="" srcSet="" />
                <div className="direct-nav-txt">Hình ảnh</div>
              </a>
            </li>
            <li>
              <a href="#intro" className="flex-base">
                <img src={info} alt="" srcSet="" />
                <div className="direct-nav-txt">Giới thiệu</div>
              </a>
            </li>
            <li className="flex-base">
              <a href="#fee" className="flex-base">
                <img src={fee} alt="" srcSet="" />
                <div className="direct-nav-txt">Học phí</div>
              </a>
            </li>
            <li className="flex-base">
              <a href="#comment" className="flex-base">
                <img src={comment} alt="" srcSet="" />
                <div className="direct-nav-txt">Ý kiến phản hồi</div>
              </a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
export default DirectNav;
