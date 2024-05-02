import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
function InfoBox({ info }) {
  const init_url =
    "https://images.unsplash.com/photo-1494807143020-e958f7a1cc66?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1602858659965-ea6f743b7679?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1694153049828-1a5c38def8e2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1669727758969-d6a7ecda8011?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <center>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humadity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.humadity > 80 ? (
                <ThunderstormIcon style={{ color: "#0066ff" }} />
              ) : info.temp > 15 ? (
                <WbSunnyIcon style={{ color: "#ebc014" }} />
              ) : (
                <AcUnitIcon style={{ color: "#1a9ae5" }} />
              )}{" "}
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humadity: {info.humadity}</p>
              <p>Minimum Temperature: {info.tempMin}&deg;C</p>
              <p>Maximum Temperature: {info.tempMax}&deg;C</p>
              <p>
                The Weather can be describes as {info.weather} and Feels Like:{" "}
                {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </center>
    </div>
  );
}

export default InfoBox;
