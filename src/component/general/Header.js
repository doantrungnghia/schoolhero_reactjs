import React from "react";
import logo from "../../images/logo.svg";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Container className="nopadding">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src={logo} alt="" srcSet="" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="/" className="navbar-brand">
                <div className="header-logo-wrapper">
                  <img src={logo} srcSet="" alt="" />
                  <span className="header-logo-txt">Kindergarten</span>
                </div>
              </Link>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 header-menu">
                <li className="nav-item active">
                  <a className="nav-link" href="a.html">
                    Trong nước <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="a.html">
                    Quốc tế
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="a.html">
                    Khóa học
                  </a>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0 flex-center-center">
                <img src="../../images/eng.svg" alt="" />
                <div className="dropdown header-dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN
                  </button>
                  <div
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="a.html">
                      English
                    </a>
                    <a className="dropdown-item" href="a.html">
                      Vietnammese
                    </a>
                  </div>
                </div>
                <button className="btn-signin">Đăng nhập</button>
                <button className="btn-primary btn-signup">Đăng ký</button>
              </div>
            </div>
          </Container>
        </nav>
      </header>
    );
  }
}
export default Header;
