import React from "react";
import "./BlogHeader.scss";
import "./commoncss/layout.scss";

const BlogHeader = () => {
  return (
    <div className="blogheader__container">
      <div className="blogheader__body flex">
        <div className="blogheader__avatar flex-2">
          <div className="blogheader__image-box">
            <span className="blogheader__icon icon-336" />
          </div>
        </div>
        <div className="blogheader__container-right flex-3">
          <h1 className="blogheader__h1">Henry 's blog</h1>
          <h2 className="blogheader__h2">人没有梦想，和咸鱼有什么区别</h2>
          <div className="blogheader__icons">
            <a
              href="https://github.com/GaoHengdong"
              className="blogheader__iconbox"
            >
              <span className="icon-150" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008566682910"
              className="blogheader__iconbox"
            >
              <span className="icon-092" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
