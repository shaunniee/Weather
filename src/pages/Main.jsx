import React from "react";
import MainCard from "../cards/MainCard";
import SideCard from "../cards/SideCard";
import SideCard2 from "../cards/SideCard2";
import SideCard3 from "../cards/SideCard3";
import Header from "../header/Header";
import styles from "./style.module.scss";
import SearchList from "../components/SearchList";
function Main({
  data,
  forecast,
  setCities,
  setSearchActive,
  search,
  setSearch,
  searchActive,
  cities
}) {
    let width=window.innerWidth
    let breakpoint1=1050;
  return (
    <div className={styles.grid}>
      <div>
        <Header
          setCities={setCities}
          setSearchActive={setSearchActive}
          search={search}
          setSearch={setSearch}
        />
        <div className={styles.addScroller}>
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
      </div>
      {width>breakpoint1&&searchActive &&(
        <div>
       <MainCard show={true} data={data} forecast={forecast} />
          {/* <SideCard forecast={forecast} />
          <SideCard2 data={data} /> */}
        </div>
      ) }
       { !searchActive &&<SideCard3 forecast={forecast} />}
      
    </div>
  );
}

export default Main;
