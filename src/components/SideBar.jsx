import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiModernCity } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import logo from "../weather/weather.svg";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import {history} from 'react-router-dom'
function SideBar({ searchActive,setSearchActive }) {
  let location = useLocation();
console.log(location)
  // const navigateTo=()=>{
  //   history.push('/settings'+history.location.search)
  // }
  const setActive = ()=>{
    setSearchActive(true)
  }
  
  const setActiveWeather = ()=>{
    setSearchActive(false)
  }
  
  return (
    <div className={styles.sideBar}>
      <img className={styles.sideBar__logo} src={logo} alt="logo" />
      <Link
            onClick={setActiveWeather}

      to={{ pathname: "/", search: location.search }}
        className={`${styles.sideBar__nav} ${location.pathname==="/"&&!searchActive && styles.active}`}
      >
        <span>
          <TiWeatherPartlySunny />
        </span>
        <span>Weather</span>
      </Link>
      <Link 
      onClick={setActive}
      to={{ pathname: "/", search: location.search }}
        className={`${styles.sideBar__nav} ${location.pathname==="/"&&searchActive && styles.active}`}
      >
        <span>
          <GiModernCity />
        </span>
        <span>Cities</span>
      </Link>
      <div className={styles.sideBar__nav}>
        <span>
          <TbMapSearch />
        </span>
        <span>Maps</span>
      </div>

      <Link
        className={`${styles.sideBar__nav} ${location.pathname==="/settings"&& styles.active}`}
        to={{ pathname: "/settings", search: location.search }}
      >
        <span>
          <FiSettings />
        </span>
        <span>Settings</span>
      </Link>
    </div>
  );
}

export default SideBar;
