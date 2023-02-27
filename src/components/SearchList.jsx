import React, { useEffect, useState, useRef } from "react";
import api from "../helpers/api";
import json from "../weather/64x64/weather.json";
import styles from "./searchlist.module.scss";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
function SearchList({ cities, setSearch, setSearchActive, setCities }) {
  let navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const firstUpdate = useRef(true);

  const setCoord = (coords) => {
    navigate({
      path: "",
      search: `?search=${coords.lat},${coords.lon}`,
    });
    let timer1 = setTimeout(() => clearDefaults(), 1000);
    timer1();
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setInfo([]);
    if (cities.length > 0) {
      cities.map((val, ind) => {
        if (ind < 5) {
          api
            .getData(`${val.lat},${val.lon}`)
            .then((res) => {
              console.log(res);
              const da = res.data;
              setInfo((prev) => [...prev, da]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return null;
      });
    }
  }, [cities]);

  const clearDefaults = () => {
    setCities([
      { lat: 51.5072, lon: 0.118092 },
      { lat: 50.4501, lon: 30.5234 },
      { lat: 53.3498, lon: -6.2603 },
      { lat: 12.9716, lon: 77.5946 },
      { lat: 25.2048, lon: 55.2708 },
    ]);
    setInfo([]);
    setSearch("");
    setSearchActive(false);
  };

  return (
    <div className={styles.container}>
      <span onClick={clearDefaults} className={styles.backbtn}>
        <MdArrowBack />
      </span>
      {info &&
        info.map((val, ind) => (
          <div onClick={() => setCoord(val.location)} className={styles.card}>
            <div className={styles.inner}>
              <img
                className={styles.img}
                src={require(`../weather/64x64/${
                  val.current.is_day === 0 ? "night" : "day"
                }/${
                  json.find((X) => X.code === val.current.condition.code).icon
                }.png`)}
                alt="icon"
                key={`${val.location.lat},${val.location.lon}`}
              />
              <div className={styles.location}>
                <span>{val.location.name}</span>
                <span>{val.location.country}</span>
              </div>
            </div>
            <span className={styles.temp}>{val.current.temp_c} &deg; C</span>
          </div>
        ))}
    </div>
  );
}

export default SearchList;
