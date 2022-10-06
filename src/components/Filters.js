import React from "react";
import filterData from "../dummyData/filterData";
import Filter from "./Filter";
import styles from "../css/Filters.module.css";

function Filters(props){
    return (
        <section className={styles.container}>
            <Filter filterHandle={props.filterHandle} type={'location'} data={filterData[0]}/>
            <div className={styles.verticalLine}></div>

            <Filter filterHandle={props.filterHandle} type={'price'} data={filterData[1]}/>
            <div className={styles.verticalLine}></div>

            <Filter filterHandle={props.filterHandle} type={'propertyType'} data={filterData[2]}/>
            <div className={styles.verticalLine}></div>

            <div className={styles.filterBtnContainer}>
                <button onClick={props.searchHandle} className={styles.filterBtn}>Search</button>
            </div>
        </section>
    )
}

export default Filters;