import React from "react";
import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <img
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png"
        alt="Access forbidden"
      />
      <h4
       style={{
          position: "absolute",
          bottom: "8px",
          transform: "translate(50%)",
          textAlign: "center",
        }}
      > This page does not exist, <Link to="/home"> Back to Sociogram </Link> </h4>
    </div>
  );
};

export default FourOFour;
