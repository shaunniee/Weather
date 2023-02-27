import React from "react";
import styles from "./header.module.scss";
import api from "../helpers/api";

function Header({setSearchActive,search,setSearch,setCities}) {
    const searchInput = React.useRef(null)
    const onFocus=()=>{
      setSearchActive(true)
    }
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
