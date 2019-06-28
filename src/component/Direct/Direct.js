import React from "react";
import DirectBanner from "./DirectBanner";
import DirectInfo from "./DirectInfo";
import DirectNav from "./DirectNav";
import DirectLibrary from "./DirectLibrary";
import DirectIntro from "./DirectIntro";
import DirectComment from "./DirectComment";
class Direct extends React.Component {
  render() {
    return (
      <div className="direct">
        <DirectBanner directBanner={this.props.schoolBanner} />
        <div className="direct-direction">
          <DirectInfo
            schoolLogo={this.props.schoolLogo}
            schoolName={this.props.schoolName}
            schoolAddress={this.props.schoolAddress}
            schoolLink={this.props.schoolLink}
            schoolPhone={this.props.schoolPhone}
            schoolKind={this.props.schoolKind}
            schoolFee={this.props.schoolFee}
            schoolLikes={`${this.props.schoolLikes} lượt thích`}
            schoolComment={`${this.props.schoolComment} bình luận`}
          />
          <DirectNav />
          <DirectLibrary schoolImages={this.props.schoolImages} />
          <DirectIntro
            schoolLogo={this.props.schoolLogo}
            schoolIntro={this.props.schoolIntro}
            schoolName={this.props.schoolName}
          />
          <DirectComment schoolComments={this.props.schoolComments} />
        </div>
      </div>
    );
  }
}
export default Direct;
