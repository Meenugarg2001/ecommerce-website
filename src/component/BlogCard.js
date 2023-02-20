import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">20 February, 2023</p>
        <h5 className="title">A Beautiful Sunday Morning</h5>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corporis
          earum quod voluptate aliquid, recusandae eaque distinctio at ullam
          molestias the in the end of commerce website.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
