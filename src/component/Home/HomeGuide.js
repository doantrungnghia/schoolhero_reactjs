import React from "react";
import guide_1 from "../../images/search.svg";
import guide_2 from "../../images/see.svg";
import guide_3 from "../../images/report.svg";
import { Container, Row, Col } from "reactstrap";
class HomeGuide extends React.Component {
  render() {
    return (
      <section className="guide">
        <Container>
          <h3 className="uppercase text-center guide-title">
            TÌM TRƯỜNG CHO BÉ?
          </h3>
          <p className="guide-txt text-center ">Dành cho các bậc phụ huynh</p>
          <Row className="guide-item-row first">
            <Col lg="6" md="6" sm="6" xs="12" className="text-center ">
              <img src={guide_1} className="img-fluid" alt="" />
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="guide-item-content ">
              <div className="guide-number">1</div>
              <p className="guide-content-title">
                Tìm kiếm trường cho các bé theo khu vực phù hợp
                <br />
                nhất với bạn
              </p>
              <p className="guide-content-txt">
                Lorem Ipsum is simply dummy text of the
                <br />
                printing and typesetting industry
              </p>
            </Col>
          </Row>
          <Row className="guide-item-row">
            <Col lg="6" md="6" sm="6" xs="12" className="guide-item-content ">
              <div className="guide-number">2</div>
              <p className="guide-content-title">
                Xem xét các thông tin về trường học Cơ sở vật chất, chương trình
                đào tạo
              </p>
              <p className="guide-content-txt">
                Lorem Ipsum is simply dummy text of the
                <br />
                printing and typesetting industry
              </p>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="text-center ">
              <img src={guide_2} className="img-fluid" alt="" />
            </Col>
          </Row>
          <Row className="row guide-item-row">
            <Col lg="6" md="6" sm="6" xs="12" className="text-center ">
              <img src={guide_3} className="img-fluid" alt="" />
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="guide-item-content">
              <div className="guide-number">3</div>
              <p className="guide-content-title">
                Để lại nhận xét giúp các bậc phụ huynh khác
              </p>
              <p className="guide-content-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default HomeGuide;
