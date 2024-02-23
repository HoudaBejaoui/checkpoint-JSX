import React from "react";
// Price component receives 'price' as a prop and renders it within a <p> element.
const Price = ({ price }) => (
  <p style={{ color: "#8c6d46", fontWeight: "bold" }}>{price}</p>
);
// Exporting the Price component as the default export of this module.
export default Price;