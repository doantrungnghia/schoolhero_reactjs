import React from "react";
import search from "../../images/direct.svg";
import banner_element from "../../images/banner-element.svg";
import HomeSearchItem from "./HomeSearchItem";
import delSign from "../../function/delSign";
class HomeSearch extends React.Component {
  render() {
    const temp = this.props.schoolData.map((data, index) => {
      let searchValue = delSign(this.props.searchValue.toLowerCase());
      if (delSign(data.schoolName.toLowerCase()).includes(searchValue)) {
        return (
          <HomeSearchItem
            key={index}
            schoolLogo={data.schoolLogo}
            schoolName={data.schoolName}
          />
        );
      } else return false;
    });
    return (
      <div className="banner text-center">
        <p className="banner-txt">TÌM KIẾM TRƯỜNG MẦM NON</p>
        <div className="text-center">
          <div className="banner-search flex-center">
            <img src={search} className="banner-search-direct" alt="" />
            <span className="banner-search-txt flex-center">
              Thành phố Hồ Chí Minh
            </span>
            <input
              type="text"
              className="banner-search-input"
              ref={this.props.refSearch}
              onChange={this.props.onChangeInput}
              onKeyDown={this.props.onClickArrow}
            />
            <button className="btn-primary btn-search">Tìm kiếm</button>
          </div>
          <div className="banner-search-list display-none">
            <ul>{temp}</ul>
          </div>
        </div>
        <div className="banner-element">
          <img src={banner_element} className="img-fluid" alt="" />
        </div>
      </div>
    );
  }
}
export default HomeSearch;
