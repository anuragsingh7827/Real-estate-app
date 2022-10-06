import React from "react";
import AllCards from "../AllCards";
import styles from "../../css/Favorites.module.css";
import frown from "../../imgs/frown.png";

function Favorites(props){
    const allFavorites = props.properties.filter(property => property.isFavorite)
    return (
        <div className={styles.mainContent}>
            <h1 className={styles.title}>Favorites</h1>
            {allFavorites.length > 0 ? <AllCards 
                                            data={allFavorites} 
                                            favoriteHandle={props.favoriteHandle}
                                        /> :
                                        <div className={styles.noFavorites}>
                                            <p className={styles.noFavoritesLabel}>
                                                This place looks empty!
                                            </p>
                                            <img className={styles.frown} 
                                                src={frown}
                                            />
                                        </div>}
        </div>
    )
}

export default Favorites;