import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search-bar">
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
<div>
  <footer>
    <p>
      <a
        className="credit-link"
        href="https://github.com/lisacandemyr/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by <strong>VM</strong> hosted on{" "}
      <a
        className="credit-link"
        href="https://github.com/VMevamax/weather-reacttwo"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </p>
  </footer>
</div>;
