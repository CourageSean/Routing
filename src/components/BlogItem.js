import React from "react";
import { Link } from "react-router-dom";

function BlogItem(props) {
  return (
    <div>
      <img className="blogImg" src={props.imgUrl} alt="" />
      <h3>{props.title}</h3>
      <Link to={`/article/${props.id}`}>
        <input type="button" value="Read more" />
      </Link>
    </div>
  );
}

export default BlogItem;
