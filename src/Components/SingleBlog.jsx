import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = (props) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={`https://atik.thesoftking.com/playlab/${props.imagePath}/${props.data_values.image}`} alt="image" />
      </div>
      <div className="cocktail-footer">
        <h5>{props.data_values.title}</h5>
        <Link to={`/detail/${props.id}`} className="btn btn-primary btn-details">
          Detail
        </Link>
      </div>
    </article>
  );
};

export default SingleBlog;
