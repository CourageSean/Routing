import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./Blogdata";
import image from "./image.json";

function Details(props) {
  let { id } = useParams();
  const article = blogData.filter((elt) => {
    return elt.id.toString() === id.toString();
  });

  console.log(article);
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>{article[0].title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          dolores?
        </p>
        <small></small>
      </div>
    </div>
  );
}

export default Details;
