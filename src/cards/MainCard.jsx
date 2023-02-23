import React, { useEffect, useState } from "react";
import styles from "./maincard.module.scss";
import api from "../helpers/api";
import { useSearchParams } from 'react-router-dom';

function MainCard({data,setData}) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search')
  console.log(search);
  useEffect(() => {
    checkLocation();
  }, [search]);

  const checkLocation = () => {
    if (search) {
      api
        .getData(search)
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(!search){
      console.log("hihi")
      api
      .getData(`51.52,-0.11`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className={styles.card}>
      <span className={styles.card__city}>
        {data && data.location && data.location.name && data.location.name}
      </span>
      <span className={styles.card__temp}>
        {data && data.current && data.current.temp_c && data.current.temp_c}{" "}
        &deg; C
      </span>
      <span className={styles.card__condition}>
        {data &&
          data.current &&
          data.current.condition &&
          data.current.condition.text}
      </span>
    </div>
  );
}

export default MainCard;
