import React from "react";
import styles from "./sidecard.module.scss";
import json from "../weather/64x64/weather.json"
import { BsFillCloudSunFill } from "react-icons/bs";
function SideCard({ forecast }) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Todays forecast</p>
      <div className={styles.card__grid}>
        {forecast&& forecast.forecastday&& forecast.forecastday[0].hour && forecast.forecastday[0].hour.map((val,ind)=>(
          <div className={styles.card__item}>
          <span className={styles.card__item_time}>{ind/12<=1?ind:ind-12} {ind/12 <1 ?'Am':'Pm'}</span>
          <span className={styles.card__item_icon}>
            {/* <BsFillCloudSunFill /> */}
            <img src={require(`../weather/64x64/${val.is_day===0?'night':'day'}/${json.find(X=>X.code===val.condition.code).icon}.png`)} alt="icon" />
          </span>
          <span className={styles.card__item_temp}>{val.temp_c} &deg; C</span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default SideCard;
