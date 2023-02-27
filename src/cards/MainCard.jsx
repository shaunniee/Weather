import React from "react";
import styles from "./maincard.module.scss";
import GaugeChart from "react-gauge-chart";
function MainCard({ data, forecast, show }) {
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
          <img
            src={data && data.current && data.current.condition.icon}
            alt=""
          />
        </div>
      </div>
      {!show && (
        <div className={styles.cardSection}>
          <div className={styles.cardSection__block}>
            <GaugeChart
              percent={data && data.current && data.current.uv / 10}
              nrOfLevels={11}
              formatTextValue={(value) => value / 10}
              id="gauge-chart1"
            />
            <p className={styles.blockName}>UV Index</p>
          </div>
          <div className={styles.cardSection__block}>
            <GaugeChart
              percent={
                data &&
                data.current &&
                data.current.air_quality &&
                data.current.air_quality["gb-defra-index"] / 10
              }
              formatTextValue={(value) => value / 10}
              id="gauge-chart1"
            />
            <p className={styles.blockName}>AQI</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainCard;
