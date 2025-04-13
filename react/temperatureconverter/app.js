import React, { Component } from "react";

class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = { celsius: "", fahrenheit: "" };
  }

  convertToFahrenheit = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius,
      fahrenheit: (celsius * 9/5 + 32).toFixed(2),
    });
  };

  convertToCelsius = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      fahrenheit,
      celsius: ((fahrenheit - 32) * 5/9).toFixed(2),
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Celsius"
          onChange={this.convertToFahrenheit}
          value={this.state.celsius}
        />
        <p>Fahrenheit: {this.state.fahrenheit}</p>
        <input
          type="number"
          placeholder="Fahrenheit"
          onChange={this.convertToCelsius}
          value={this.state.fahrenheit}
        />
        <p>Celsius: {this.state.celsius}</p>
      </div>
    );
  }
}

export default TemperatureConverter;
