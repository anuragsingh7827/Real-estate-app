import React from "react";
import styles from '../css/Navlink.module.css';
import dropdownIcon from '../imgs/dropdown.png';
import { Link } from 'react-router-dom';
function Navlink(props){
    return (
        <li>
            {props.data.title === 'Favorites' ? 
                <Link onClick={() => props.linkHandle(props.data.id)} 
                    to="/favorites" className={props.data.isClicked ? 
                    `${styles.navlinkBtn} ${styles.navlinkBtnClicked}` : 
                    `${styles.navlinkBtn}`}>
                        {props.data.title}
                        {props.data.isDropdown && <img className={styles.dropdown} src={dropdownIcon}/>}
                </Link> :
                <Link onClick={() => props.linkHandle(props.data.id)} 
                    to="/" className={props.data.isClicked ? 
                    `${styles.navlinkBtn} ${styles.navlinkBtnClicked}` : 
                    `${styles.navlinkBtn}`}>
                        {props.data.title}
                        {props.data.isDropdown && <img className={styles.dropdown} src={dropdownIcon}/>}
                </Link>}
        </li>
    )
}

export default Navlink;