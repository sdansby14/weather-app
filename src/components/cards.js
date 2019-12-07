import React, { Component } from "react";
import Card from "./card";
import { fetchWeather } from "../utils/api";
import Loading from "./Loading";

class Cards extends Component {
  state = { forecast: [], city: null, error: null };

  componentDidMount() {
    fetchWeather()
      .then(data => {
        this.setState({
          forecast: this.getForecastList(data),
          city: data.city.name
        });
      })
      .catch(err => {
        console.warn("Error fetching weather: ", err);

        this.setState({
          error: `There was an error fetching the weather.`
        });
      });
  }

  getForecastList = ({ list }) => {
    let forecast_list = [];
    list.forEach((forecast, index) => {
      if (index % 8 === 1) {
        forecast_list.push(forecast);
      }
    });
    return forecast_list;
  };

  isLoading = () => {
    const { city, error } = this.state;

    return city === null && error === null;
  };

  render() {
    const { error, forecast, city } = this.state;

    return (
      <React.Fragment>
        {this.isLoading() && <Loading text="Fetching Weather" />}

        {error && <p className="center-text error">{error}</p>}

        {!this.isLoading() && (
          <div>
            <h1>{city}</h1>
            <div className="grid-container">
              {forecast.map(({ main, dt, weather }) => {
                return (
                  <Card
                    description={weather[0].description}
                    icon={weather[0].icon}
                    hi={main.temp_max}
                    low={main.temp_min}
                    key={dt}
                  />
                );
              })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Cards;
