import React from "react";
import Card from "./Card";
import styles from "../css/AllCards.module.css";

function AllCards(props){
    const allCards = props.data.map(property => {
        return <Card key={property.id} 
                     data={property}
                     favoriteHandle={props.favoriteHandle}
                />
    });

    return (
        <div className={styles.grid}>
            {allCards}
        </div>
    )
}

export default AllCards;