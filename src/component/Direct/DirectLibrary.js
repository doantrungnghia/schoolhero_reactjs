import React from "react";
import { Container, Row, Col } from "reactstrap";
import DirectLibraryCarousel from "./DirectLibraryCarousel";
import DirectLibraryButton from "./DirectLibraryButton";
class DirectLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolImages: this.props.schoolImages,
      schoolImagesCarousel: "",
      schoolImagesClick: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }
  componentWillMount() {
    this.setState({
      schoolImagesCarousel: this.state.schoolImages.facilities,
      schoolImagesClick: this.state.schoolImages.facilities[0]
    });
  }
  componentDidMount() {
    const listImage = document.querySelectorAll(".direct-library-img");
    listImage[0].classList.add("active");
  }
  handleClickImage(e) {
    const listImage = document.querySelectorAll(".direct-library-img");
    for (var i = 0; i < listImage.length; i++) {
      listImage[i].classList.remove("active");
    }
    e.target.classList.add("active");
    this.setState({
      schoolImagesClick: e.target.src
    });
  }
  handleClick(e) {
    const item = e.target.id;
    const buttonClick = document.getElementById(e.target.id);
    const buttons = document.getElementsByClassName("direct-library-nav");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    buttonClick.classList.add("active");
    if (item === "canteen") {
      this.setState({
        schoolImagesCarousel: this.state.schoolImages.canteen
      });
    } else if (item === "dormitory") {
      this.setState({
        schoolImagesCarousel: this.state.schoolImages.dormitory
      });
    } else if (item === "library") {
      this.setState({
        schoolImagesCarousel: this.state.schoolImages.library
      });
    } else if (item === "facilities") {
      this.setState({
        schoolImagesCarousel: this.state.schoolImages.facilities
      });
    }
    const listImage = document.querySelectorAll(".direct-library-img");
    for (var y = 0; y < listImage.length; y++) {
      listImage[y].classList.remove("active");
    }
    const listTrack = document.querySelector(".slick-track");
    listTrack.style.transform = "translateX(0px)";
  }
  render() {
    return (
      <div className="direct-library" id="image">
        <Container>
          <Row className="direct-library-title-wrapper">
            <Col xs="12" className="nopadding">
              <h4 className="direct-library-title uppercase">Hình ảnh</h4>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="direct-library-container noradius">
            <img
              src={this.state.schoolImagesClick}
              className="img-fluid direct-library-scale"
              alt=""
            />
          </Row>
        </Container>
        <Container>
          <Row className="direct-library-container-row">
            <Col xs="12">
              <ul>
                <DirectLibraryButton
                  handleClick={this.handleClick}
                  title="Cơ sở vật chất"
                  id="facilities"
                  active="active"
                />
                <DirectLibraryButton
                  handleClick={this.handleClick}
                  title="Thư viện"
                  id="library"
                />
                <DirectLibraryButton
                  handleClick={this.handleClick}
                  title="Căn tin"
                  id="canteen"
                />
                <DirectLibraryButton
                  handleClick={this.handleClick}
                  title="Ký túc xá"
                  id="dormitory"
                />
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="direct-library-container">
          <DirectLibraryCarousel
            schoolImagesCarousel={this.state.schoolImagesCarousel}
            handleClickImage={this.handleClickImage}
          />
        </Container>
      </div>
    );
  }
}
export default DirectLibrary;
