// Importing necessary components and libraries
import React from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";

// Main functional component for the React app
const App = () => {
  // Asking the user for their first name using a prompt, defaulting to " there!" if no name is provided
  const firstName = prompt("What is your first name?") || " there!";

  return (
    
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Card component with styling */}
      <Card style={{ width: "288px", margin: "auto", marginBottom: "20px", padding: "20px" }}>
        {/* Conditional rendering of the Image component based on the presence of a first name */}
        <Image imageUrl={product.imageUrl} />
        {/* Card body containing other components for displaying product information */}
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      {/* Greeting message paragraph with styling */}
      <p style={{ marginTop: "20px", fontSize: "18px", color: "#6d5745", fontStyle: "italic", fontWeight: "bold" }}>
        {`Hello, ${firstName}!`} 
      </p>
    </div>
  );
};

// Exporting the App component as the default export
export default App;