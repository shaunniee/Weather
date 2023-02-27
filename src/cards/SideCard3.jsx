import React from "react";
import styles from "./sidecard3.module.scss";
import json from "../weather/64x64/weather.json"
function SideCard3({forecast}) {
  const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return (
    <div className={styles.card}>
    <p className={styles.card__title}>7-day forecast</p>
    <div className={styles.card__grid}>
      {forecast&& forecast.forecastday&& forecast.forecastday.map((val,ind)=>(
        <div className={styles.card__item}>
        <span className={styles.card__item_time}>{day[new Date(val.date).getDay()]}</span>
        <span className={styles.card__item_icon}>
          {/* <BsFillCloudSunFill />  */}
          <img src={require(`../weather/64x64/day/${json.find(X=>X.code===val.day.condition.code).icon}.png`)} alt="icon" />
         {}
        </span>
        <span className={styles.card__item_temp}>{`${val.day.maxtemp_c}/${val.day.mintemp_c}`} &deg; C</span>
      </div>
      ))}
      
      
    </div>
  </div>
  );
}

export default SideCard3;
