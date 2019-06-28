import React from "react";
import Home from "./Home";
class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.refSearch = React.createRef();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickArrow = this.onClickArrow.bind(this);
    this.state = {
      searchValue: "",
      firstArrow: false
    };
  }
  onChangeInput() {
    let listSearchItem = document.querySelectorAll(".banner-search-list li");
    let searchValueCurrent = this.refSearch.current.value;
    let listSearch = document.querySelector(".banner-search-list");
    if (searchValueCurrent === "") {
      listSearch.classList.add("display-none");
    } else {
      this.setState({
        searchValue: searchValueCurrent,
        firstArrow: false
      });
      listSearch.classList.remove("display-none");
      for (let i = 0; i < listSearchItem.length; i++) {
        listSearchItem[i].classList.remove("active");
      }
    }
  }
  onClickArrow(e) {
    var listSearchItem = document.querySelectorAll(".banner-search-list li");
    if (e.keyCode === 38 || e.keyCode === 40) {
      if (this.state.firstArrow === false) {
        listSearchItem[0].classList.add("active");
        this.setState({
          firstArrow: true
        });
      } else {
        var prevActive = document.querySelector(
          ".banner-search-list li.active"
        );
        if (e.keyCode === 40) {
          if (prevActive.nextElementSibling !== null) {
            for (let i = 0; i < listSearchItem.length; i++) {
              listSearchItem[i].classList.remove("active");
            }
            prevActive.nextElementSibling.classList.add("active");
          }
        } else {
          if (prevActive.previousElementSibling !== null) {
            for (let i = 0; i < listSearchItem.length; i++) {
              listSearchItem[i].classList.remove("active");
            }
            prevActive.previousElementSibling.classList.add("active");
          }
        }
      }
    }
  }
  render() {
    return (
      <Home
        schoolData={this.props.schoolData}
        onChangeInput={this.onChangeInput}
        refSearch={this.refSearch}
        searchValue={this.state.searchValue}
        onClickArrow={this.onClickArrow}
      />
    );
  }
}
export default HomeContainer;
