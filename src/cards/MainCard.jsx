import React from "react";
import styles from "./maincard.module.scss";
import json from "../weather/64x64/weather.json";
import Clock from "react-live-clock";
import GaugeChart from "react-gauge-chart";
import { GiWaterDrop } from "react-icons/gi";

function MainCard({ data, forecast,show }) {

  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <h1 className={styles.card__city}>
          {data && data.location && data.location.name}
        </h1>
        <p className={styles.card__rain}>
          Chances of rain: {console.log(forecast)}
          {forecast &&
            forecast.forecastday &&
            forecast.forecastday[0].day.daily_chance_of_rain}
          %
        </p>
        <h2 className={styles.card__temp}>
          {data && data.current && data.current.temp_c} &deg; C
        </h2>
        <div className={styles.card__right}>
        <img src={data && data.current && data.current.condition.icon} alt="" />
      </div>
      </div>
      
      {/* <div className={styles.time}>
      <Clock  format={"dddd"} ticking={true} timezone={`${data && data.location&& data.location.tz_id}`} />
        <Clock  format={"h:mm:ss a"} ticking={true} timezone={`${data && data.location&& data.location.tz_id}`} />

      </div> */}
     {!show&& <div className={styles.cardSection}>
        <div className={styles.cardSection__block}>
          <GaugeChart
            percent={data&&data.current&&data.current.uv/10}
            nrOfLevels={11}
            formatTextValue={(value) => value / 10}
            id="gauge-chart1"
          />
          <p className={styles.blockName}>UV Index</p>
        </div>
        <div className={styles.cardSection__block}>
          <GaugeChart
            percent={data&&data.current&&data.current.air_quality&&data.current.air_quality['gb-defra-index']/10}
            formatTextValue={(value) => value / 10}
            id="gauge-chart1"
          />
          <p className={styles.blockName}>AQI Index</p>
        </div>
      </div>}
    </div>
  );
}

export default MainCard;
