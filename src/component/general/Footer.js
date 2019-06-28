import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
              <h3 className="footer-name">SCHOOL HERO</h3>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
              <ul>
                <li className="footer-title">
                  <p>Tỉnh thành</p>
                </li>
                <li className="footer-txt">
                  <p>Hà nội</p>
                </li>
                <li className="footer-txt">
                  <p>Hồ Chí Minh</p>
                </li>
                <li className="footer-txt">
                  <p>Đà Nẵng</p>
                </li>
                <li className="footer-txt">
                  <p>Cần thơ</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-lg-0 col-md-6 mt-md-4 col-sm-6 mt-sm-4 col-xs-6">
              <ul>
                <li className="footer-title">
                  <p>Phân Loại</p>
                </li>
                <li className="footer-txt">
                  <p>Công lập</p>
                </li>
                <li className="footer-txt">
                  <p>Tư nhân</p>
                </li>
                <li className="footer-txt">
                  <p>Quốc tế</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-lg-0 col-md-6 mt-md-4 col-sm-6 mt-sm-4 col-xs-6">
              <p className="footer-title">Giới thiệu</p>
              <p className="footer-txt">
                61 Cao Thắng - F3 - Q3 - HCMC school-hero@kvytechnology.com
              </p>
            </div>
          </div>
          <hr />
          <p className="footer-copy">© Copyright 2018 - KVY Technology</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
