import React from "react";

const FavouritesButton = ({ handleShowLocation }) => {
  return (
    <div className="favorites-button" onClick={handleShowLocation}>
      <button>See to Favorites</button>
    </div>
  );
};

export default FavouritesButton;
