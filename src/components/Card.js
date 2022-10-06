import React, { useState } from "react";
import bedIcon from "../imgs/bedIcon.png";
import bathIcon from "../imgs/bathroomIcon.png";
import areaIcon from "../imgs/areaIcon.png";
import sparkleIcon from "../imgs/sparkleIcon.png";
import hollowHeart from "../imgs/hollowHeart.png";
import solidHeart from "../imgs/solidHeart.png";
import styles from "../css/Card.module.css";


function Card(props){
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.data.image}/>
            <div className={styles.cardContent}>
                <p className={styles.price}>{props.data.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0, 
                    minimumFractionDigits: 0, 
                })}
                    <span className={styles.perMonth}>/month</span>
                </p>
                <p className={styles.state}>{props.data.state}</p>
                <p className={styles.address}>{props.data.address}</p>
                <div className={styles.rule}></div>
                <div className={styles.rooms}>
                    <img className={styles.bed} src={bedIcon} />
                    <p>{props.data.beds} Beds</p>
                    <img className={styles.bath} src={bathIcon} />
                    <p>{props.data.bathrooms} Bathrooms</p>
                    <img className={styles.area} src={areaIcon} />
                    <p>{props.data.length} x {props.data.breadth}m<sup>2</sup></p>
                </div>
            </div>
            <span className={styles.badge}>
                <img className={styles.sparkleIcon} src={sparkleIcon} />
                <p className={styles.badgeText}>POPULAR</p>
            </span>
            <span onClick={() => props.favoriteHandle(props.data.id)} className={styles.heartContainer}>
                {props.data.isFavorite ? <img className={styles.heart} src={solidHeart} /> :
                        <img className={styles.heart} src={hollowHeart} />}
            </span>
        </div>
    )
}


export default Card;