import React, { Component } from "react";
import Card from "./card";
import sunny from "../assets/img/sunny.png";
import cloudy from "../assets/img/cloudy.png";
import rainy from "../assets/img/rainy.png";
import snowy from "../assets/img/snowy.png";
import { fetchWeather } from "../utils/api";

const weatherObj = [
  {
    id: 1,
    forecast: sunny,
    hi: "90",
    low: "80"
  },
  {
    id: 2,
    forecast: rainy,
    hi: "78",
    low: "69"
  },
  {
    id: 3,
    forecast: cloudy,
    hi: "76",
    low: "64"
  },
  {
    id: 4,
    forecast: snowy,
    hi: "32",
    low: "20"
  },
  {
    id: 5,
    forecast: sunny,
    hi: "76",
    low: "64"
  }
];

class Cards extends Component {
  state = { weather: [] };

  componentDidMount() {
    this.setState({
      weather: weatherObj
    });

    fetchWeather().then(data => {
      console.dir(data);
    });
  }

  render() {
    return (
      <div className="grid-container">
        {this.state.weather.map(({ forecast, hi, low, id }) => {
          return <Card forecast={forecast} hi={hi} low={low} key={id} />;
        })}
      </div>
    );
  }
}

export default Cards;
