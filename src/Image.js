import React from "react";

// Image component that takes an 'imageUrl' prop and renders an image element
const Image = ({ imageUrl }) => (
  <img
    src={imageUrl}
    alt="Product"
    style={{ maxWidth: "100%", borderRadius: "5px", marginBottom: "10px" }}
  />
);

// Exporting the Image component as the default export
export default Image;