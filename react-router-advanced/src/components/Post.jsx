import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Post #{id}</h2>
      <p>This is dynamic content for post ID {id}</p>
    </div>
  );
}

export default Post;
