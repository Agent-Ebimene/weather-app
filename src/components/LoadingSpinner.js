import React from "react";

import { Circles } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <h2> Loading</h2>
      <Circles
        height="80"
        width="80"
        color="red"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
