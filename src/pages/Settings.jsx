import React from "react";
import MainCard from "../cards/MainCard";
import SideCard from "../cards/SideCard";
import SideCard2 from "../cards/SideCard2";
import SideCard3 from "../cards/SideCard3";
import Header from "../header/Header";
import styles from "./style.module.scss";
import SearchList from "../components/SearchList";
function Settings({
  data,
  forecast,
  setCities,
  setSearchActive,
  search,
  setSearch,
  searchActive,
  cities
}) {
  return (
    <div className={styles.grid}>
      <div>
        <Header
          setCities={setCities}
          setSearchActive={setSearchActive}
          search={search}
          setSearch={setSearch}
        />
        <div>
          <h1>Settings</h1>
        </div>
      </div>
      {searchActive ? (
        <div>
          <MainCard data={data} forecast={forecast} />
          <SideCard forecast={forecast} />
          <SideCard2 data={data} />
        </div>
      ) : (
        <SideCard3 forecast={forecast} />
      )}
    </div>
  );
}

export default Settings;
