import React from "react";
import styles from "./sidecard.module.scss";
function SideCard({ data }) {
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles._left}>
        <span>Felt temp</span>
        <span>Humidity</span>
        <span>Wind</span>
        <span>Visibility</span>
        <span>Precipitation</span>
        <span>UV</span>
      </div>
      <div className={styles._right}>
        <span>{data && data.current && data.current.feelslike_c} &deg; C</span>
        <span>{data && data.current && data.current.humidity} %</span>
        <span>{data && data.current && data.current.wind_kph} kph</span>
        <span>{data && data.current && data.current.vis_km} kms</span>
        <span>{data && data.current && data.current.precip_mm} mm</span>
        <span>{data && data.current && data.current.uv}</span>
      </div>
    </div>
  );
}

export default SideCard;
