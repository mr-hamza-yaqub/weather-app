import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
function SearchBox({ UpdateInfo }) {
  let [city, setCity] = useState("");
  let [error, SetError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0b0201e0b9b40a006e609647980f03dd";

  let getWeatherInfo = async () => {
    try {
      let Response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await Response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        humadity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      throw error;
    }
  };
  function handleChange(e) {
    setCity(e.target.value);
  }

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      UpdateInfo(newInfo);
    } catch (error) {
      SetError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No Such Place Exist in Our System!</p>
        )}
      </form>
    </div>
  );
}

export default SearchBox;
