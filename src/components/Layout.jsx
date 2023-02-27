import React, { useEffect, useState } from "react";
import MainCard from "../cards/MainCard";
import styles from "./layout.module.scss";
import Header from "../header/Header";
import SideCard from "../cards/SideCard";
import SideCard2 from "../cards/SideCard2";
import SideCard3 from "../cards/SideCard3";
import SearchList from "./SearchList";
import Main from "../pages/Main";
import { useSearchParams } from "react-router-dom";
import api from "../helpers/api";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "../pages/Settings";
function Layout() {
  const [data, setData] = useState({});
  let navigate = useNavigate();
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
  const [settings,setSettings]=useState({
    temp:{
      celsius:true,
      fahrenheit:false
    },
    wind:{
      kph:true,
      mph:false
    },
    pressure:{
      Inches:true,
      millibar:false
    },
    precipitation:{
      in:true,
      mm:false
    },
    distance:{
      km:true,
      miles:false
    }
  })
  const searchQuery = searchParams.get("search");
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position && position.coords) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        navigate({
          path: "",
          search: `?search=${position.coords.latitude},${position.coords.longitude}`,
        });
      } else {
        alert("Turn on navigation");
      }
    });
  };

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
      {/* <SideBar searchActive={searchActive}/>
      <div>
        <Header
          setCities={setCities}
          setSearchActive={setSearchActive}
          search={search}
          setSearch={setSearch}
        />
        {searchActive ? (
          <SearchList
            setCities={setCities}
            setSearchActive={setSearchActive}
            search={search}
            setSearch={setSearch}
            cities={cities}
          />
        ) : (
          <div>
            <MainCard data={data} forecast={forecast} />
            <SideCard forecast={forecast} />
            <SideCard2 data={data} />
          </div>
        )}
      </div>
      <div>
        {searchActive ? (
          <div>
            <MainCard data={data} forecast={forecast} />
            <SideCard forecast={forecast} />
            <SideCard2 data={data} />
          </div>
        ) : (
          <SideCard3 forecast={forecast} />
        )}
      </div> */}

      <SideBar setSearchActive={setSearchActive} searchActive={searchActive} />
    
        <Routes>
          <Route path="/" element={ <Main
        data={data}
        forecast={forecast}
        setCities={setCities}
        setSearchActive={setSearchActive}
        search={search}
        setSearch={setSearch}
        searchActive={searchActive}
        cities={cities}
      />} />
      <Route path="/settings" element={
        <Settings
        data={data}
        forecast={forecast}
        setCities={setCities}
        setSearchActive={setSearchActive}
        search={search}
        setSearch={setSearch}
        searchActive={searchActive}
        cities={cities}
      />}
      />
     
        </Routes>
  
     
    </div>
    // header,main,side
    // header search,main
    // header ,setting ,main
  );
}

export default Layout;
