import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Main from "../pages/Main";
import { useSearchParams } from "react-router-dom";
import api from "../helpers/api";
// import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { Routes, Route } from "react-router-dom";
import Settings from "../pages/Settings";
function Layout() {
  const [data, setData] = useState({});
  // let navigate = useNavigate();
  const [forecast, setforecastData] = useState({});
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([
    { lat: 51.5072, lon: 0.118092 },
    { lat: 50.4501, lon: 30.5234 },
    { lat: 53.3498, lon: -6.2603 },
    { lat: 12.9716, lon: 77.5946 },
    { lat: 25.2048, lon: 55.2708 },
  ]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchParams] = useSearchParams();
  // const [settings,setSettings]=useState({
  //   temp:{
  //     celsius:true,
  //     fahrenheit:false
  //   },
  //   wind:{
  //     kph:true,
  //     mph:false
  //   },
  //   pressure:{
  //     Inches:true,
  //     millibar:false
  //   },
  //   precipitation:{
  //     in:true,
  //     mm:false
  //   },
  //   distance:{
  //     km:true,
  //     miles:false
  //   }
  // })
  const searchQuery = searchParams.get("search");

  // Get current location function
  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     if (position && position.coords) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //       navigate({
  //         path: "",
  //         search: `?search=${position.coords.latitude},${position.coords.longitude}`,
  //       });
  //     } else {
  //       alert("Turn on navigation");
  //     }
  //   });
  // };

  useEffect(() => {
    if (searchQuery) {
      api
        .getData(searchQuery)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .forecastData(searchQuery)
        .then((res) => {
          setforecastData(res.data.forecast);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .getData("London")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .forecastData("London")
        .then((res) => {
          setforecastData(res.data.forecast);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchQuery]);

  return (
    <div className={styles.layout}>
      <SideBar setSearchActive={setSearchActive} searchActive={searchActive} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              forecast={forecast}
              setCities={setCities}
              setSearchActive={setSearchActive}
              search={search}
              setSearch={setSearch}
              searchActive={searchActive}
              cities={cities}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              data={data}
              forecast={forecast}
              setCities={setCities}
              setSearchActive={setSearchActive}
              search={search}
              setSearch={setSearch}
              searchActive={searchActive}
              cities={cities}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Layout;
