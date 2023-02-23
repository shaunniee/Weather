import React, { useEffect, useState } from "react";
import MainCard from "../cards/MainCard";
import styles from "./layout.module.scss";
import Header from "../header/Header";
import SideCard from "../cards/SideCard";
import SideCard2 from "../cards/SideCard2";
import SideCard3 from "../cards/SideCard3";
import { useSearchParams } from "react-router-dom";
import api from "../helpers/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Layout() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [data, setData] = useState({});
  const [astroData, setAstroData] = useState({});
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    if (search) {
      api
        .astroData(search)
        .then((res) => {
          setAstroData(res.data.astronomy.astro);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .forecastData(search)
        .then((res) => {
          setForecastData(res.data.forecast);
          console.log(res.data.forecast);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!search) {
      api
        .astroData(`51.52, -0.11`)
        .then((res) => {
          setAstroData(res.data.astronomy.astro);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .forecastData(`51.52, -0.11`)
        .then((res) => {
          setForecastData(res.data.forecast);
          console.log(res.data.forecast);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);

  return (
    <>
      <Header />

      <div className={styles.layout}>
        <div className={styles.main}>
          <MainCard data={data} setData={setData} />
          <div>
          <Carousel showStatus={false}  stopOnHover showThumbs={false} showArrows={false} width="30rem"  
          autoPlay infiniteLoop interval={4000}>
            <SideCard data={data} />
            <SideCard2 data={astroData} />
          </Carousel>
          </div>
        </div>
        <div className={styles.forecast}>
          {forecastData &&
            forecastData.forecastday &&
            forecastData.forecastday.map((m, ind) => (
              <SideCard3 key={ind} data={m} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Layout;
