import React,{useState} from "react";
import styles from "./header.module.scss";
import { GoLocation } from "react-icons/go";
import api from "../helpers/api";
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
    const [search,setSearch]=useState('')
    const [places,setPlaces]=useState([])
    const getLocation=()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
          if(position&& position.coords){
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            navigate({
              path:"",
              search:`?search=${position.coords.latitude},${position.coords.longitude}`
          })
        }
        else{
          alert('Turn on navigation')
        }
          });
         
    }
    const handleChange=async(e)=>{
        setSearch(e.target.value);
        if(search){
        api.searchData(search).then((res)=>{
            console.log(res.data)
            setPlaces(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    }
    if(!search){
      api.searchData(`51.52,-0.11`).then((res)=>{
        console.log(res.data)
        setPlaces(res.data)

    }).catch((err)=>{
        console.log(err)
    })
    }
    }
    const handleSearch=()=>{
        if(search){
            navigate({
                path:"",
                search:`?search=${search}`
            })
        }
    }
    const setSearches=(lat,lon,searchString)=>{
      setSearch(searchString)
        navigate({
            path:"",
            search:`?search=${lat},${lon}`
        })
        api.getData(`${lat},${lon}`).then((res)=>{
          console.log(res)
          setPlaces([])
          setSearch([])
        }).catch((err)=>{
          console.log(err)
        })
     }
  return (
    <div className={styles.cont}>
    <header className={styles.header}>
      <div className={styles.search__container}>
        <input
          className={styles.search__container_input}
          type="text"
          name="search"
          id="search"
          placeholder="Search city"
          value={search}
          onChange={handleChange}
        />
        {/* <span onClick={handleSearch} className={styles.search__container_btn}>Search</span> */}
        <div className={styles.dropdown}>{places && places.map((val,ind)=>(
      <span onClick={()=>setSearches(places[ind].lat,places[ind].lon,places[ind].name)} key={ind}>{places[ind].name}  ({places[ind].country})</span>
    ))}</div>
      </div>
      <span className={styles.header__location} onClick={getLocation}>
        <span className={styles.header__location_ico}>
          <GoLocation />
        </span>
        <span className={styles.header__location_text}>
          {" "}
          Your location Weather
        </span>
      </span>
    </header>
    
    </div>
  );
}

export default Header;
