import React from "react";
import BlogItem from "./BlogItem";
import blogData from "./Blogdata";
import itemImg from "./image.json";

function Blog(props) {
  console.log(blogData);
  console.log(itemImg);
  return (
    <div className="blogContainer">
      {blogData.map((elt, index) => (
        <BlogItem
          title={elt.title}
          imgUrl={itemImg[index].img_url}
          id={elt.id}
        />
      ))}
    </div>
  );
}

export default Blog;
