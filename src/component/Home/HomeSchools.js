import React from "react";
import HomeSchoolsItem from "./HomeSchoolsItem";
import { Container, Row, Col } from "reactstrap";
import changeURL from "../../function/changeURL";
class HomeSchools extends React.Component {
  render() {
    let homeSchoolsInterNation = [];
    let homeSchoolsNormal = [];
    const homeSchool = this.props.schoolData;
    for (let i in homeSchool) {
      if (homeSchool[i].schoolType === "internation") {
        homeSchoolsInterNation.push(homeSchool[i]);
      } else homeSchoolsNormal.push(homeSchool[i]);
    }
    let homeSchoolsInterNationFourItem = homeSchoolsInterNation.slice(0, 4);
    let homeSchoolsInterNationContainer = homeSchoolsInterNationFourItem.map(
      (data, index) => {
        return (
          <HomeSchoolsItem
            key={index}
            schoolLogo={data.schoolLogo}
            schoolBanner={data.schoolBanner}
            schoolLink={data.schoolLink}
            schoolName={data.schoolName}
            schoolAddress={data.schoolAddress}
            schoolKind={data.schoolKind}
            schoolFee={data.schoolFee}
            schoolLikes={`${data.schoolLikes} lượt thích`}
            schoolComment={`${data.schoolComment} bình luận`}
            linkRouter={changeURL(data.schoolName)}
          />
        );
      }
    );
    let homeSchoolsNormalnFourItem = homeSchoolsNormal.slice(0, 4);
    let homeSchoolsNormalContainer = homeSchoolsNormalnFourItem.map(
      (data, index) => {
        return (
          <HomeSchoolsItem
            key={index}
            schoolLogo={data.schoolLogo}
            schoolBanner={data.schoolBanner}
            schoolLink={data.schoolLink}
            schoolName={data.schoolName}
            schoolAddress={data.schoolAddress}
            schoolKind={data.schoolKind}
            schoolFee={data.schoolFee}
            schoolLikes={`${data.schoolLikes} lượt thích`}
            schoolComment={`${data.schoolComment} bình luận`}
            linkRouter={changeURL(data.schoolName)}
          />
        );
      }
    );
    return (
      <section className="schools">
        <Container>
          <Row>
            <h1 className="schools-title uppercase text-center">
              DANH SÁCH TRƯỜNG
            </h1>
          </Row>
          <Row>
            <Col xs="6">
              <p className="uppercase schools-subtitle">THEO KHU VỰC</p>
            </Col>
            <Col xs="6" className="text-right">
              <p className="schools-viewmore">Xem tất cả</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <ul className="btn-area-wrapper">
                <li className="btn-area">TP. Hồ Chí Minh</li>
                <li className="btn-area">Hà Nội</li>
                <li className="btn-area">Đà Nẵng</li>
              </ul>
            </Col>
          </Row>
          <Row className="flex-wrapper">{homeSchoolsNormalContainer}</Row>
          <Row className="">
            <Col xs="6">
              <p className="uppercase schools-subtitle">TRƯỜNG QUỐC TẾ</p>
            </Col>
            <Col xs="6" className="text-right">
              <p className="schools-viewmore">Xem tất cả</p>
            </Col>
          </Row>
          <Row className="flex-wrapper mt-24">
            {homeSchoolsInterNationContainer}
          </Row>
          {/* <Row>
              <Col xs="12">
                <p className="uppercase schools-subtitle schools-subtitle-style">
                  Trường ĐƯỢC XEM NHIỀU NHẤT
                </p>
              </Col>
            </Row> */}
        </Container>
      </section>
    );
  }
}
export default HomeSchools;
