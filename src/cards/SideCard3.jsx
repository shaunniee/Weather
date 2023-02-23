import React from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import styles from "./sidecard3.module.scss";
function SideCard3({data}) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.head__date}>{data&& data.date}</span>
        {/* <span>Wednesday</span> */}
      </div>
      <div className={styles.body}>
        <span>
         <span className={styles.ico}> <BsSun /></span>
          {data && data.day&& data.day.maxtemp_c} &deg; C
        </span>
        <span>
          <span className={styles.ico}><BsMoonStars /></span>
          {data && data.day&& data.day.mintemp_c} &deg; C
        </span>
        <span className={styles.condition}>{data && data.day&& data.day.condition && data.day.condition.text}</span>
      </div>
    </div>
  );
}

export default SideCard3;
