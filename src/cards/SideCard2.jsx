import React from "react";
import styles from "./sidecard.module.scss";
import { FaTemperatureLow ,FaWind} from "react-icons/fa";
import { WiMoonrise, WiMoonset, WiMoonAltThirdQuarter,WiHumidity } from "react-icons/wi";
import {CiSun} from "react-icons/ci"
import {GiWaterDrop} from "react-icons/gi";
import {FiSunrise,FiSunset} from "react-icons/fi"
function SideCard2({ data }) {
  console.log(data);
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Air Conditions</p>
      <div className={styles.grid2}>
        <div className={styles.item2}>
          <span className={styles.item2_ico}>
            <FaTemperatureLow />
          </span>
          <div className={styles.item2_data}>
            <span className={styles.item2_data_title}>Real Feel</span>
            <span className={styles.item2_data_value}>{data&&data.current&&data.current.temp_c} &deg; C</span>
          </div>
        </div>
        <div className={styles.item2}>
          <span className={styles.item2_ico}>
            <FaWind />
          </span>
          <div className={styles.item2_data}>
            <span className={styles.item2_data_title}>Wind</span>
            <span className={styles.item2_data_value}>{data&&data.current&&data.current.wind_kph} Km/h</span>
          </div>
        </div>
        <div className={styles.item2}>
          <span className={styles.item2_ico}>
            <GiWaterDrop />
          </span>
          <div className={styles.item2_data}>
            <span className={styles.item2_data_title}>Amount of rain</span>
            <span className={styles.item2_data_value}>{data&&data.current&&data.current.precip_mm} mm</span>
          </div>
        </div>
        <div className={styles.item2}>
          <span className={styles.item2_ico}>
            <CiSun />
          </span>
          <div className={styles.item2_data}>
            <span className={styles.item2_data_title}>
              UV Index
            </span>
            <span className={styles.item2_data_value}>{data&&data.current&&data.current.uv}</span>
          </div>
          
        </div>
        <div className={styles.item2}>
          <span className={styles.item2_ico}>
            <WiHumidity />
          </span>
          <div className={styles.item2_data}>
            <span className={styles.item2_data_title}>
              Humidity
            </span>
            <span className={styles.item2_data_value}>{data&&data.current&&data.current.humidity} %</span>
          </div>
          
        </div>

       
      </div>
    </div>
  );
}

export default SideCard2;
