import React from "react";
import styles from '../css/Search.module.css';

function Search(props){
    return (
        <div className={styles.search}>
            <h1 className={styles.title}>Search properties to rent</h1>
            <input onChange={props.searchbarHandle} className={styles.searchBox} type="text" placeholder="Search" />
        </div>
    )
}

export default Search;