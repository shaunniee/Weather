import React from "react";
import styles from "./sidecard.module.scss";
import {
  BsFillSunriseFill,
  BsFillSunsetFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { WiMoonrise, WiMoonset, WiMoonAltThirdQuarter } from "react-icons/wi";
function SideCard2({ data }) {
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles._left}>
        <span>
          Sunrise
          <span className={styles._ico}>
            {" "}
            <BsFillSunriseFill />
          </span>
        </span>
        <span>
          Sunset{" "}
          <span className={styles._ico}>
            <BsFillSunsetFill />
          </span>
        </span>
        <span>
          Moonrise
          <span className={styles._ico}>
            <WiMoonrise />
          </span>
        </span>
        <span>
          Moonset{" "}
          <span className={styles._ico}>
            <WiMoonset />
          </span>
        </span>
        <span>
          Moon phase{" "}
          <span className={styles._ico}>
            <WiMoonAltThirdQuarter />
          </span>
        </span>
        <span>
          Moon illumination{" "}
          <span className={styles._ico}>
            <BsFillMoonStarsFill />
          </span>
        </span>
      </div>
      <div className={styles._right_1}>
        <span>{data && data.sunrise}</span>
        <span>{data && data.sunset}</span>
        <span>{data && data.moonrise}</span>
        <span>{data && data.moonset}</span>
        <span>{data && data.moon_phase}</span>
        <span>{data && data.moon_illumination}</span>
      </div>
    </div>
  );
}

export default SideCard2;
