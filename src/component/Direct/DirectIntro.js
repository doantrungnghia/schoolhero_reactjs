import React from "react";
import bus from "../../images/bus.svg";
import bed from "../../images/bed.svg";
import park from "../../images/park.svg";
import nutrition from "../../images/nutrition.svg";
import english from "../../images/english.svg";
import talent from "../../images/talent.svg";
import math from "../../images/math.svg";
import cart from "../../images/cart.svg";
import { Container, Row, Col } from "reactstrap";
class DirectIntro extends React.Component {
  render() {
    return (
      <div className="direct-intro" id="intro">
        <Container>
          <Row className="direct-intro-title-wrapper">
            <Col xs="12" className="nopadding">
              <h4 className="direct-intro-title uppercase">Giới thiệu</h4>
            </Col>
          </Row>
        </Container>
        <Container className="direct-intro-container">
          <Row>
            <Col lg="3" md="3" sm="4" xs="12">
              <img
                className="direct-intro-logo img-fluid"
                src={this.props.schoolLogo}
                alt=""
                srcSet=""
              />
            </Col>
            <Col lg="9" md="9" sm="8" xs="12">
              <h3 className="direct-intro-subtitle">{this.props.schoolName}</h3>
              <p className="direct-intro-txt">{this.props.schoolIntro}</p>
            </Col>
            <hr />
          </Row>
          <p className="direct-intro-subtitle">Các tiện ích tại trường</p>
          <Row className="flex-center-center">
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={bus} alt="" srcSet="" />
              <p className="direct-intro-convenient-txt">Hệ thống xe bus</p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={bed} alt="" />
              <p className="direct-intro-convenient-txt">Phòng ngủ</p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={park} alt="" />
              <p className="direct-intro-convenient-txt">
                Khu vui chơi ngoài trời
              </p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={nutrition} alt="" />
              <p className="direct-intro-convenient-txt">
                Chế độ dinh dưỡng tiêu chuẩn
              </p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img
                className="img-fluid direct-intro-convenient-img"
                src={english}
                alt=""
              />
              <p className="direct-intro-convenient-txt">
                Chương trình ngoại ngữ
              </p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={talent} alt="" />
              <p className="direct-intro-convenient-txt">
                Chương trình năng khiếu
              </p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={math} alt="" />
              <p className="direct-intro-convenient-txt">Chương trình toán</p>
            </Col>
            <Col
              md="3"
              sm="4"
              xs="6"
              className="text-center direct-intro-layout"
            >
              <img className="img-fluid" src={cart} alt="" />
              <p className="direct-intro-convenient-txt">
                Hệ thống thanh toán tiện lợi
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default DirectIntro;
