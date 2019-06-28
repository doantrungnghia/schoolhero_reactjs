import React from "react";
import { Container, Row, Col } from "reactstrap";
import tag from "../../images/a-tag.svg";
import phone from "../../images/phone.svg";
import direction from "../../images/direction.svg";
import man from "../../images/man.svg";
import money from "../../images/money.svg";
import comment from "../../images/comment.svg";
import star from "../../images/star.svg";
import starno from "../../images/star-no.svg";
class DirectInfo extends React.Component {
  render() {
    return (
      <div className="direct-info">
        <Container className="direct-container">
          <Row className="nomargin">
            <Col xs="9" className="pl-45">
              <div className="flex-center direct-info-item">
                <h2 className="direct-name uppercase">
                  {this.props.schoolName}
                </h2>
                <ul>
                  <li className="direct-score">
                    <img src={star} alt="" srcSet="" />
                  </li>
                  <li className="direct-score">
                    <img src={star} alt="" srcSet="" />
                  </li>
                  <li className="direct-score">
                    <img src={star} alt="" srcSet="" />
                  </li>
                  <li className="direct-score">
                    <img src={star} alt="" srcSet="" />
                  </li>
                  <li className="direct-score">
                    <img src={starno} alt="" srcSet="" />
                  </li>
                </ul>
              </div>
              <div className="flex-base direct-info-item">
                <img src={direction} alt="" srcSet="" />
                <p className="direct-info-txt">{this.props.schoolAddress}</p>
              </div>
              <div className="direct-info-item">
                <Container>
                  <Row>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 nopadding flex-base">
                      <img src={tag} alt="" srcSet="" />
                      <p className="direct-info-txt">{this.props.schoolLink}</p>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-xs-3 flex-base nopadding mt-xs-2">
                      <img src={phone} alt="" srcSet="" />
                      <p className="direct-info-txt">
                        {this.props.schoolPhone}
                      </p>
                    </div>
                  </Row>
                </Container>
              </div>
              <div className="direct-info-item">
                <Container>
                  <Row>
                    <Col
                      lg="4"
                      md="6"
                      sm="12"
                      xs="12"
                      className="nopadding flex-base"
                    >
                      <img src={man} alt="" srcSet="" />
                      <p className="direct-info-txt">{this.props.schoolKind}</p>
                    </Col>
                    <Col
                      lg="8"
                      md="6"
                      sm="12"
                      xs="12"
                      className="mt-xs-2 flex-base nopadding"
                    >
                      <img src={money} alt="" srcSet="" />
                      <p className="direct-info-txt">{this.props.schoolFee}</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs="3" className="direct-school-wrapper">
              <img
                className="img-fluid direct-school-logo"
                src={this.props.schoolLogo}
                alt=""
                srcSet=""
              />
            </Col>
            <hr />
          </Row>
          <Row className="nomargin">
            <Col className="pl-45" xs="9">
              <Container>
                <Row>
                  <Col
                    lg="4"
                    md="6"
                    sm="12"
                    xs="12"
                    className="nopadding flex-base"
                  >
                    <img src={comment} alt="" srcSet="" />
                    <p className="direct-reaction">{this.props.schoolLikes}</p>
                  </Col>
                  <Col
                    lg="8"
                    md="6"
                    sm="12"
                    xs="3"
                    className="nopadding flex-base mt-xs-2"
                  >
                    <img src={comment} alt="" srcSet="" />
                    <p className="direct-reaction">
                      {this.props.schoolComment}
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default DirectInfo;
