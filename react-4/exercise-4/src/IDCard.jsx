// IDCard.jsx
import React from "react";

function IDCard() {
  return (
    <div className="id-card">
      <div className="photo"></div>
      <div className="info">
        <h2>John Doe</h2>
        <p>
          Date of Birth: <span></span>
        </p>
        <p>
          Expiration Date: <span></span>
        </p>
        <p>
          License No: <span></span>
        </p>
        <p>
          State: <span></span>
        </p>
      </div>
    </div>
  );
}

export default IDCard;
