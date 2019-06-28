import React from "react";
import DirectCommentItem from "./DirectCommentItem";
import { Container } from "reactstrap";
class DirectComment extends React.Component {
  render() {
    var listComment = this.props.schoolComments.map((data, index) => {
      return (
        <DirectCommentItem
          key={index}
          commentName={data.commentName}
          commentTime={data.commentTime}
          commentDate={data.commentDate}
          commentContent={data.commentContent}
        />
      );
    });
    return (
      <div className="direct-comment" id="comment">
        <Container>
          <div className="row direct-comment-title-wrapper">
            <div className="col-12 nopadding">
              <h4 className="direct-comment-title uppercase">
                ý kiến phản hồi
              </h4>
            </div>
          </div>
        </Container>
        <Container className="direct-comment-container">
          {listComment}
        </Container>
      </div>
    );
  }
}
export default DirectComment;
