import React from "react";

export default function Card({ forecast, hi, low }) {
  console.log(forecast, hi, low);
  return (
    <div>
      <div className="card">
        <img src={forecast} alt={forecast} />
        <div style={{ overflow: "hidden" }}>
          <p style={{ float: "left" }}>{hi}</p>
          <p style={{ float: "right" }}>{low}</p>
        </div>
      </div>
    </div>
  );
}
