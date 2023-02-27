import React,{useState,useRef,useEffect} from "react";
import styles from "./header.module.scss";
import { GoLocation } from "react-icons/go";
import api from "../helpers/api";
import { useNavigate } from "react-router-dom";

function Header({setSearchActive,search,setSearch,setCities}) {
    let navigate = useNavigate();
    const searchInput = React.useRef(null)
    const [places,setPlaces]=useState([])
    const onFocus=()=>{
      setSearchActive(true)
    }
    // const onBlur=()=>{
    //   setSearchActive(false)
    // }
    // const getLocation=()=>{
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       if(position&& position.coords){
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         navigate({
    //           path:"",
    //           search:`?search=${position.coords.latitude},${position.coords.longitude}`
    //       })
    //     }
    //     else{
    //       alert('Turn on navigation')
    //     }
    //       });
         
    // }
    const handleChange=(e)=>{
        setSearch(e.target.value);
        if(search){
        api.searchData(search).then((res)=>{
            console.log(res.data)
            setCities(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    }
    }


  return (
 <header>
  <input ref={searchInput} type="text" className={styles.searchBar} placeholder="Search cities" onFocus={onFocus}
  value={search}
  onChange={handleChange}
  />
 </header>
  );
}

export default Header;
