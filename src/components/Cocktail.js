import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <Link to={`/cocktail/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <button className="btn btn-primary btn-details">details</button>
        </div>
      </Link>
    </article>
  );
};

export default Cocktail;
