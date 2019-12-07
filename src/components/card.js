import React from "react";

export default function Card({ hi, low, icon, description }) {
  return (
    <div>
      <div className="card">
        <h3>{description.toUpperCase()}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={icon}
        />
        <div style={{ overflow: "hidden" }}>
          <p style={{ float: "left" }}>High: {hi}</p>
          <p style={{ float: "right" }}>Low: {low}</p>
        </div>
      </div>
    </div>
  );
}
