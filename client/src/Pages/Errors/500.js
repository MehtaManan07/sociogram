import React from "react";
import { useHistory } from "react-router-dom";

const FourOThree = ({ id }) => {

    const history = useHistory()

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <img
        src="https://freefrontend.com/assets/img/403-forbidden-html-templates/403-Page-Forbidden.png"
        alt="Access forbidden"
      />
      <h3
        style={{
          position: "absolute",
          bottom: "8px",
          transform: "translate(50%)",
          textAlign: "center",
        }}
      >
        <div className=""> You cannot access this page... </div>
        <button onClick={() => history.push(`/profile/${id}`)} className="btn"> Back to profile </button>
      </h3>
    </div>
  );
};

export default FourOThree;
