import React, { useState } from "react";
import dropdownIcon from "../imgs/dropdown.png";
import styles from "../css/Filter.module.css";
import { nanoid } from 'nanoid';

function Filter(props){
    const [dropdownClicked,setDropdownClicked] = useState(false);
    const [optionSelected,setOptionSelected] = useState(props.data.options[0]);

    function dropdownHandle(){
        setDropdownClicked(prevClick => !prevClick);
    }

    function optionHandle(option){
        setOptionSelected(option);
        setDropdownClicked(prevClick => !prevClick);
        props.filterHandle(props.type,option);
    }

    const filterOptions = props.data.options.map(option => {
        return (
            <p key={nanoid()} onClick={() => optionHandle(option)}
                className={styles.option}>
                    {props.type === 'price' ? option.range : option}
            </p>
        )
    });

    return (
        <div className={styles.filter}>
            <p className={styles.filterName}>{props.data.filterName}</p>
            <div className={styles.dropdownContainer}>
                <p className={styles.optionSelected}>
                    {props.type === 'price' ? optionSelected.range : optionSelected}
                </p>
                <div className={styles.dropdown}>
                    <button onClick={dropdownHandle} className={styles.dropdownBtn}>
                        <img className={styles.dropdownIcon} src={dropdownIcon} />
                    </button>
                    <div className={dropdownClicked ? 
                        `${styles.dropdown} ${styles.visible}`:
                        `${styles.dropdown} ${styles.hidden}`}>
                        {filterOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;