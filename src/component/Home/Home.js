import React from "react";
import HomeSearch from "./HomeSearch";
import HomeGuide from "./HomeGuide";
import HomeSchools from "./HomeSchools";
import HomeEvent from "./HomeEvent";
class Main extends React.Component {
  render() {
    return (
      <div className="home">
        <HomeSearch
          onChangeInput={this.props.onChangeInput}
          refSearch={this.props.refSearch}
          searchValue={this.props.searchValue}
          schoolData={this.props.schoolData}
          onClickArrow={this.props.onClickArrow}
        />
        <HomeGuide />
        <HomeSchools schoolData={this.props.schoolData} />
        <HomeEvent />
      </div>
    );
  }
}
export default Main;
