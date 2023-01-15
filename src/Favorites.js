import React from "react";

const Favorites = ({ handleCloseLocation, showLocation, favorites }) => {
  return (
    <div
      className={`favorites-container ${
        showLocation ? "show-favorites-container" : ""
      }`}
    >
      <article className="favorites-locations">
        <span className="close-btn" onClick={handleCloseLocation}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <h2 className="favorites-header">Favourite Cities</h2>
        <div className="location-names">
          {favorites.map((location, index) => (
            <div key={index} className="favorite-location">
              <h3>{location}</h3>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Favorites;
