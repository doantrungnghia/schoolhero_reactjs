import React from "react";
import "../../slick/slick.css";
import event_1 from "../../images/event-1.svg";
import event_2 from "../../images/event-2.svg";
import event_3 from "../../images/event-3.svg";
import Slider from "react-slick";
class HomeEvent extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
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
    return (
      <section className="event">
        <div className="container event-container">
          <h3 className="event-title uppercase text-center">
            SỰ KIỆN CHO CÁC BÉ
          </h3>
          <h4 className="event-subtitle text-center">
            Danh sách các hoạt động hữu ích
            <br />
            dành cho các bé
          </h4>
          <div className="event-carousel">
            <Slider {...settings}>
              <div>
                <img className="img-fluid" src={event_1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_3} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_3} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_3} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={event_1} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeEvent;
