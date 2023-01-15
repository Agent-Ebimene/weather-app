import React from "react";

const Favorites = () => {
  return (
    <div className="favorites-container">
      <article className="favorites-locations">
        <span className="close-btn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <h2 className="favorites-header">Favourite Cities</h2>
      </article>
    </div>
  );
};

export default Favorites;
