import React from "react";

const AddToFavoritesButton = ({
  handleAddToFavorites,
  location,
  handleSubmit,
}) => {
  return (
    <div
      className="favorites-button "
      onClick={() => handleAddToFavorites(location)}
    >
      <button>Add to favorites</button>
    </div>
  );
};

export default AddToFavoritesButton;
