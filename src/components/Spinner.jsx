import React from "react";

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"></div>
      <div class="sr-only">Loading...</div>
    </div>
  );
};

export default Spinner;
