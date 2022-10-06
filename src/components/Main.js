import React from "react";
import Search from "./Search";
import styles from '../css/Main.module.css';
import Filters from "./Filters";
import AllCards from "./AllCards";
import frown from "../imgs/frown.png";

function Main(props){
    return (
        <main className={styles.mainContent}>
            <Search searchbarHandle={props.searchbarHandle} />  
            <Filters filterHandle={props.filterHandle} 
                    searchHandle={props.searchHandle}
            />
            {props.filteredProperties.length > 0 ?
                <AllCards data={props.filteredProperties} 
                        favoriteHandle={props.favoriteHandle} 
                /> :
                <div className={styles.noFavorites}>
                    <p className={styles.noFavoritesLabel}>
                        Sorry! No results found.
                    </p>
                    <img className={styles.frown} 
                        src={frown}
                    />
                </div>}
        </main>
    )
}

export default Main;