import React, { Component } from "react";
import sunny from "../assets/img/sunny.png";

class Card extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="card">
          <img src={sunny} alt="sunny" />
          <div style={{ overflow: "hidden" }}>
            <p style={{ float: "left" }}>HI</p>
            <p style={{ float: "right" }}>LOW</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
