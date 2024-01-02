import React from "react";

const HexagonWithText = () => {
  const hexagonPoints = "50,0 150,0 200,86.6 150,173.2 50,173.2 0,86.6";

  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Create a hexagon with points attribute defining its vertices */}
      <polygon points={hexagonPoints} fill="black" />

      {/* Add text element within the hexagon */}
      <text x="100" y="100" textAnchor="middle" fill="white" fontSize="16">
        Your Text Here
      </text>
    </svg>
  );
};

export default HexagonWithText;
