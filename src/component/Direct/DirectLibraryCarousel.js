import React from "react";
import "../../css/slick.css";
import Slider from "react-slick";
import DirectLibraryCarouselItem from "./DirectLibraryCarouselItem";
class DirectLibraryCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const directCarousel = this.props.schoolImagesCarousel.map(
      (data, index) => {
        return (
          <DirectLibraryCarouselItem
            key={index}
            slide={data}
            handleClickImage={this.props.handleClickImage}
          />
        );
      }
    );
    return (
      <div>
        <Slider {...settings}>{directCarousel}</Slider>
      </div>
    );
  }
}
export default DirectLibraryCarousel;
